import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuPage from './pages/Menu'
import ReservationPage from "./pages/Reservation";
import NotFoundPage from './pages/NotFound'

import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MenuPage />}/>
          <Route path="reserva" element={<ReservationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
