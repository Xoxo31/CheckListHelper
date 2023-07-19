import {BrowserRouter, Route, Routes } from "react-router-dom"
import InputPage from "../components/InputPage";
import ChecklistPage from "../components/ChecklistPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InputPage />} />
                <Route path="/checklist" element={<ChecklistPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;