import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import NotFound from "../components/NotFound";
import {useDispatch, useSelector} from "react-redux";
import Loading from "./Loading";
import {getLookup} from "../redux/store/mealSlice";

const MealInfo = () => {
    const meal = useSelector((state) => state.meals.lookup)
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getLookup(id))
    }, [dispatch, id])

    if (meal === null) {
        return <NotFound />
    }

    return (
        <Layout>
            <div className="container">
                <div className={'mealinfo-wrapper'}>
                    <button className={'back-btn'} onClick={() => navigate(-1)}>
                        Back
                    </button>
                    <h2>{meal.strMeal}</h2>
                    <img width={'300px'} src={meal.strMealThumb} alt={meal.strMeal}/>
                    <p>{meal.strInstructions}</p>
                    <p className={'ingredient-wrapper'} key={meal.idMeal}>
                        <div className={'row'}>
                            <div className={'col-4'}>
                                <Link to={`/ingredient/${meal.strIngredient1}`}>
                                    <img width={'200px'}
                                         src={`http://www.themealdb.com/images/ingredients/${meal.strIngredient1}.png`}
                                         alt=""/>
                                    {meal.strIngredient1}
                                </Link>
                            </div>
                            <div className={'col-4'}>
                                <Link to={`/ingredient/${meal.strIngredient2}`}>
                                    <img width={'200px'}
                                         src={`http://www.themealdb.com/images/ingredients/${meal.strIngredient2}.png`}
                                         alt=""/>
                                    {meal.strIngredient2}
                                </Link>
                            </div>
                            <div className={'col-4'}>
                                <Link to={`/ingredient/${meal.strIngredient3}`}>
                                    <img width={'200px'}
                                         src={`http://www.themealdb.com/images/ingredients/${meal.strIngredient3}.png`}
                                         alt=""/>
                                    {meal.strIngredient3}
                                </Link>
                            </div>
                            <div className={'col-4'}>
                                <Link to={`/ingredient/${meal.strIngredient4}`}>
                                    <img width={'200px'}
                                         src={`http://www.themealdb.com/images/ingredients/${meal.strIngredient4}.png`}
                                         alt=""/>
                                    {meal.strIngredient4}
                                </Link>
                            </div>
                            <div className={'col-4'}>
                                <Link to={`/ingredient/${meal.strIngredient5}`}>
                                    <img width={'200px'}
                                         src={`http://www.themealdb.com/images/ingredients/${meal.strIngredient5}.png`}
                                         alt=""/>
                                    {meal.strIngredient5}
                                </Link>
                            </div>
                            <div className={'col-4'}>
                                <Link to={`/ingredient/${meal.strIngredient6}`}>
                                    <img width={'200px'}
                                         src={`http://www.themealdb.com/images/ingredients/${meal.strIngredient6}.png`}
                                         alt=""/>
                                    {meal.strIngredient6}
                                </Link>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default MealInfo;