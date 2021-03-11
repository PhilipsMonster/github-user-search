import React from 'react';
import Button from '../../../../core/components/Button';
import './styles.scss';

const Search = () => {
    return (
        <div className="search-container">
            <div className="search-content card-base">
                <h1 className="text-title">
                    Encontre um perfil Github
                </h1>
                <input
                    type="text"
                    className="user-search"
                    placeholder="Usuário Github"
                />
                <Button text="Encontrar" />
            </div>
        </div>
    );
}

export default Search;