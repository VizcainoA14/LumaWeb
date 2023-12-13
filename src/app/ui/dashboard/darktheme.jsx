"use client"
import { useState, useEffect } from "react"

export default function DarkTheme() {
    const [darkTheme, setDarkTheme] = useState(false)
    
    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkTheme(true)
    }, [])

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkTheme])

    return (
        <div
            className="w-10 h-10 flex items-center justify-center border border-surface rounded-full cursor-pointer"
            onClick={() => setDarkTheme(!darkTheme)}
            >
            {darkTheme ? "🌞" : "🌔"}
        </div>
    )
}