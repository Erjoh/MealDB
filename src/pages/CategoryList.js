import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {getCategoryList} from "../redux/store/mealSlice";
import Layout from "../components/Layout/Layout";
import NotFound from "../components/NotFound";

const CategoryListPage = () => {
    const dispatch = useDispatch();
    const meals = useSelector(state => state.meals.categoryList);
    const {categoryName} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCategoryList(categoryName));
    }, [dispatch, categoryName]);

    if (meals === null) {
        return <NotFound />
    }

    return (
        <Layout>
            <div className={'container'}>
                <button className={'back-btn'} onClick={() => navigate(-1)}>
                    Back
                </button>
                <h3>Meals in category: {categoryName}</h3>
                <div className="row">
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

export default CategoryListPage;
