import './App.css'
import ListEmployeeComponent from "./components/ListEmployeeComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {


    return (
        <>
            <BrowserRouter/>
            <HeaderComponent/>
            <Routes>
                <Route path={'/'} element={<ListEmployeeComponent />}></Route>


                <Route path={'/employees'} element={ <ListEmployeeComponent />}></Route>
            </Routes>
            <ListEmployeeComponent/>
            <FooterComponent/>
        </>
    )
}

export default App
