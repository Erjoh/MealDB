import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import MealInfo from "./MealInfo";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(res => setMeals(res.data.meals))
            .catch(err => console.log(err))
    }, [])
    return (
        <Layout>
            <h3 className={'menu-title'}>Our Menu</h3>
            <Container className={'container'}>
                <Row className={'row'}>
                    {
                        meals.map(meal => {
                            return (
                                <Col className={'columns'} xs={12} md={6} key={meal.idMeal}>
                                    <Link to={`/info/${meal.idMeal}`} className={'info-link'}>
                                        <h3>{meal.strMeal}</h3>
                                        <img width={'300px'} src={meal.strMealThumb} alt={meal.strMeal}/>
                                    </Link>
                                </Col>

                            )
                        })
                    }
                </Row>
            </Container>
        </Layout>
    );
};

export default HomePage;