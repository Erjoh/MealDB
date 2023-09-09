import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import Col from "react-bootstrap/Col";

const SearchPage = () => {
    const {name} = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [name])
    return (
        <Layout>
            <div className={'row'}>
                {
                    data?.meals.map(meal => {
                        return (
                            <div className={'col-4'} key={meal.idMeal}>
                                <Link to={`/info/${meal.idMeal}`} className={'info-link'}>
                                    <h3>{meal.strMeal}</h3>
                                    <img width={'300px'} src={meal.strMealThumb} alt={meal.strMeal}/>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    );
};

export default SearchPage;