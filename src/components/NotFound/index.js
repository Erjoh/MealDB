import React from 'react';
import Layout from "../Layout/Layout";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Layout>
            <div className={'container'}>
                <button className='back-btn' onClick={() => navigate('/')}>Back to main menu</button>
                <div style={{
                    display: "flex",
                    color: '#3d2817',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: "column",
                    height: "100vh"
                }}>
                    <h1>404</h1>
                    <h2>Not Found</h2>
                </div>
            </div>
        </Layout>
    );
};

export default NotFound;