import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import HomePage from './pages/home/page';
import AppPage from "./pages/app/page";
import './App.css'

function App() {

  return (
    <>
      <Suspense fallback={<BigSpinner />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/character' element={<AppPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}
function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}

export default App
