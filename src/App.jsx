import { Navbar } from "./components/Navbar"
import { FavoritesPage } from "./pages/FavoritesPage"
import { MainPage } from "./pages/MainPage"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


export const App = () => {
    return(
        <BrowserRouter>
            <header>
                <Navbar/>
            </header>
            <body>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/:city" element={<MainPage/>} />
                    <Route path="/favorites" element={<FavoritesPage/>} />
                </Routes>
            </body>
        </BrowserRouter>
    )
}
