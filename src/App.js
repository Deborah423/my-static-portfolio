import React from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Header from "./components/Header"

export default function App() {
    return(
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}