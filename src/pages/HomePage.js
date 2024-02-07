import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import NotFound from "../components/NotFound";
import {getMeals} from "../redux/store/mealSlice";

const HomePage = () => {
    const dispatch = useDispatch()
    const meals = useSelector(state => state.meals.meals)

    useEffect(() => {
        dispatch(getMeals());
    }, [dispatch])

    if (meals === null) {
        return <NotFound />
    }

    return (
        <Layout>
            <div className={'container'}>
                <h3 className={'menu-title'}>Our Menu</h3>
                <div className={'row'}>
                    {
                        meals.map(meal => {
                            return (
                                <div className={'col-4'} key={meal.idMeal}>
                                    <Link to={`/info/${meal.idMeal}`} className={'info-link'}
                                          style={{display: 'block', textAlign: 'center'}}>
                                        <h3 style={{
                                            margin: '0',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            maxHeight: '2.4em',
                                            color: '#ffffff',
                                        }}>{meal.strMeal}</h3>
                                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{width: '250px'}}/>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;