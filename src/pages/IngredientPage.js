import React, {useEffect} from 'react';
import Layout from "../components/Layout/Layout";
import {Link, useNavigate, useParams} from "react-router-dom";
import NotFound from "../components/NotFound";
import {useDispatch, useSelector} from "react-redux";
import Loading from "./Loading";
import {getIngredient} from "../redux/store/mealSlice";

const IngredientPage = () => {
    const meals = useSelector(state => state.meals.ingredient)
    const {name} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getIngredient(name))
    }, [dispatch, name])

    if (meals === null) {
        return <NotFound />
    }

    return (
        <Layout>
            <div className={'container'}>
                <button className='back-btn' onClick={() => navigate(-1)}>
                    Back
                </button>
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
                                            color: '#ffffff',
                                            maxHeight: '2.4em',
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

export default IngredientPage;