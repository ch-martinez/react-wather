import { Navbar } from "./components/Navbar"
import { FavoritesPage } from "./pages/FavoritesPage"
import { MainPage } from "./pages/MainPage"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


export const App = () => {
    return(
        <BrowserRouter>
            <header className="w-full bg-white">
                <Navbar/>
            </header>
            <body className="max-w-screen-lg mx-auto">
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/weather" element={<MainPage/>} />
                    <Route path="/favorites" element={<FavoritesPage/>} />
                </Routes>
            </body>
        </BrowserRouter>
    )
}
