import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        navigate(`/search/${search}`)
    }
    return (
        <header className={'header-wrapper'}>
            <h1 className={'logo'}>Gastronomic Journey by Erzhan</h1>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/1'}>About</Link>
            </nav>
            <div>
                <input onChange={(e) => setSearch(e.target.value) } type="text"/>
                <button onClick={handleSearch}>Search</button>
            </div>
        </header>
    );
};

export default Header;