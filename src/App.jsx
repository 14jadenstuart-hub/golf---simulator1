import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TeeTimes from './pages/TeeTimes'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import LearnMore from './pages/LearnMore'

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tee-times" element={<TeeTimes />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/learn-more" element={<LearnMore />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
