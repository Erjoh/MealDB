import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout/Layout";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const IngredientPage = () => {
    const [meal, setMeal] = useState([])
    const {name} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`)
            .then(({data}) => setMeal(data.meals[0]) )
    }, [name])
    return (
        <Layout>
            <div>
                <button onClick={() => navigate('/')}>Back to main menu</button>
                <div>
                    <Link to={`/info/${meal.idMeal}`} className={'info-link'}>
                        <h3>{meal.strMeal}</h3>
                        <img width={'300px'} src={meal.strMealThumb} alt={meal.strMeal}/>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default IngredientPage;