import React, { useState } from 'react';
import Button from '../../../../core/components/Button';
import { UserResponse } from '../../../../core/types/User';
import { makeRequest } from '../../../../core/utils/request';
import User from '../User';
import './styles.scss';

const Search = () => {

    const [userSearch, setUserSearch] = useState('');
    const [userSearching, setUserSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState<UserResponse>({
        user: '',
        public_repos: '',
        followers: '',
        following: '',
        company: '',
        blog: '',
        location: '',
        created_at: '',
        avatar_url: '',
        html_url: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setUserSearch(event.target.value);        
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData
        }
        setUserSearching(true);
        makeRequest({ url: userSearch, method: 'GET', data: payload })
            .then(response => setFormData(response.data))
            .finally(() => setUserSearch(''));
    }

    return (
        <>
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <div className="search-content card-base1">
                        <h1 className="text-title">Encontre um perfil Github</h1>
                        <input
                            name="user"
                            value={userSearch}
                            type="text"
                            className="user-search"
                            onChange={handleChange}
                            placeholder="Usuário Github"
                        />
                        <Button text="Encontrar" />
                    </div>
                </form>
            </div>
            <div className="user-container">
                {userSearching ?
                    <div className="user-content card-base2">
                        <User userResponse={formData} />
                    </div>
                    : <div></div>
                }

            </div>
        </>
    );
}

export default Search;