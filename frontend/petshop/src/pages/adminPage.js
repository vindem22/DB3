import React from 'react'
import Navbar from '../components/navbar'

export default function adminPage() {
    const links = [
        {title : "Orders", path="/orders"},
        {title : "Customers", path="/customers"},
        {title : "statistics", path="/statistics"}
    ] 
    return (
        <div>
            <Navbar />
            
        </div>
    )
}
