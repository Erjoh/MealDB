import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMeals, getSeaFood} from "../redux/store/mealSlice";
import Loading from "./Loading";
import NotFound from "../components/NotFound";
import Layout from "../components/Layout/Layout";
import {Link, useNavigate} from "react-router-dom";

const SeaFood = () => {
    const dispatch = useDispatch()
    const meals = useSelector(state => state.meals.seafood)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getSeaFood());
    }, [dispatch])

    if (meals === null) {
        return <NotFound />
    }

    return (
        <Layout>
            <div className={'container'}>
                <button className='back-btn' onClick={() => navigate('/')}>
                    Back to main menu
                </button>
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

export default SeaFood;