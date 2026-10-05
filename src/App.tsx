import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import { HomePage } from './pages/Home'
import { WorksPage } from './pages/Works'
import { CVPage } from './pages/CV'
import { NotFoundPage } from './pages/NotFound'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function AppContent() {
  useSmoothScroll()

  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RootLayout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
