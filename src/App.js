import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MealInfo from "./pages/MealInfo";
import IngredientPage from "./pages/IngredientPage";
import SearchPage from "./pages/SearchPage";
import NotFound from "./components/NotFound";
import SeaFood from "./pages/SeaFood";
import CategoryPage from "./pages/CategoryPage";
import CategoryListPage from "./pages/CategoryList";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/1' element={<AboutPage />}/>
            <Route path='/info/:id' element={<MealInfo />}/>
            <Route path='/ingredient/:name' element={<IngredientPage />}></Route>
            <Route path='/search/:name' element={<SearchPage />}></Route>
            <Route path='/seafood' element={<SeaFood />}></Route>
            <Route path='/categories' element={<CategoryPage />}></Route>
            <Route path="/category/:categoryName" element={<CategoryListPage />} />
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    );
};

export default App;