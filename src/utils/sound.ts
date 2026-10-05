// High-performance, zero-latency mechanical keyboard sound player (NovelKeys Cream)

let audioCtx: AudioContext | null = null
let thockBuffer: AudioBuffer | null = null
let isPreloading = false

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {})
  }
  return audioCtx
}

/** Preload the NovelKeys Cream thock sound on mount */
export function preloadThockSound(): void {
  if (typeof window === 'undefined' || thockBuffer || isPreloading) return
  isPreloading = true

  fetch('/sounds/thock.mp3')
    .then((res) => {
      if (!res.ok) throw new Error('Failed to load /sounds/thock.mp3')
      return res.arrayBuffer()
    })
    .then((arrayBuffer) => {
      const ctx = getAudioContext()
      if (ctx) {
        ctx.decodeAudioData(
          arrayBuffer,
          (decoded) => {
            thockBuffer = decoded
          },
          () => {
            // Decoding failed
          }
        )
      }
    })
    .catch(() => {
      // Audio prefetch failed, will fallback to HTML5 Audio
    })
    .finally(() => {
      isPreloading = false
    })
}

// Fallback HTMLAudioElement pool
const audioPool: HTMLAudioElement[] = []
const POOL_SIZE = 3

function getPooledAudio(): HTMLAudioElement {
  for (const a of audioPool) {
    if (a.paused || a.ended) {
      a.currentTime = 0
      return a
    }
  }
  const audio = new Audio('/sounds/thock.mp3')
  audio.volume = 0.95
  if (audioPool.length < POOL_SIZE) {
    audioPool.push(audio)
  }
  return audio
}

/** Play authentic NovelKeys Cream mechanical keyboard "thock" sound effect */
export function playThockSound(): void {
  try {
    const ctx = getAudioContext()

    if (ctx) {
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {})
      }

      if (thockBuffer) {
        const source = ctx.createBufferSource()
        source.buffer = thockBuffer

        // Subtle organic pitch shift (+/- 2%) so repeated clicks feel physical
        source.playbackRate.value = 0.98 + Math.random() * 0.04

        const gain = ctx.createGain()
        gain.gain.value = 0.95
        source.connect(gain)
        gain.connect(ctx.destination)
        source.start(0)
        return
      }
    }

    // Fallback to HTML5 audio element
    const audio = getPooledAudio()
    audio.currentTime = 0
    audio.play().catch(() => {})
  } catch {
    // Fail silently without disrupting user interaction
  }
}
