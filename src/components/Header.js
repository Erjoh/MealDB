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
            <Link to={'/'}><h1 className={'logo'}>Gastronomic Journey by Erzhan</h1></Link>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/1'}>About</Link>
                <Link to={'/seafood'}>Seafood</Link>
                <Link to={'/categories'}>Categories</Link>
            </nav>
            <div>
                <input className={'header-search'} onChange={(e) => setSearch(e.target.value)} type="text"/>
                <button className={'header-btn'} onClick={handleSearch}>Search</button>
            </div>
        </header>
    );
};

export default Header;