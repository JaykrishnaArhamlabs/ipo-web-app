import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import IpoDetails from '../ipodetails'

export default function Navigation() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<App/>} />
                <Route path="/ipo/:id" element={<IpoDetails />} />
            </Routes>
        </div>
    )
}
