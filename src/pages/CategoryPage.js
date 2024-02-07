import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loading from "./Loading";
import NotFound from "../components/NotFound";
import Layout from "../components/Layout/Layout";
import {Link, useNavigate} from "react-router-dom";
import {getCategory} from "../redux/store/mealSlice";

const CategoryPage = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.meals.categories)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch])

    if (categories === null) {
        return <NotFound/>
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
                        categories.map(category => {
                            return (
                                <div className={'col-4'} key={category.idCategory}>
                                    <Link to={`/category/${category.strCategory}`} className={'info-link'}
                                          style={{display: 'block', textAlign: 'center'}}>
                                        <h3 style={{
                                            margin: '0',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            color: '#ffffff',
                                            textOverflow: 'ellipsis',
                                            maxHeight: '2.4em'
                                        }}>{category.strCategory}</h3>
                                        <img src={category.strCategoryThumb} alt={category.strCategory}
                                             style={{width: '250px'}}/>
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

export default CategoryPage;