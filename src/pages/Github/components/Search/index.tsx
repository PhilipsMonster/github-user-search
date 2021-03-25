import React, { useState } from 'react';
import Button from '../../../../core/components/Button';
import './styles.scss';
import { makeRequest } from '../../../../core/utils/request';

type FormState = {
    userSearch: string;
    public_repos: string;
    followers: string;
    following: string;
    company: string;
    blog: string;
    location: string;
    created_at: string;
    avatar_url: string;
}

const Search = () => {

    const [formData, setFormData] = useState<FormState>({
        userSearch: '',
        public_repos: '',
        followers: '',
        following: '',
        company: '',
        blog: '',
        location: '',
        created_at: '',
        avatar_url: ''
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData
        }
        makeRequest({ url: payload.userSearch, method: 'GET', data: payload })
            .then((response) => setFormData(response.data));
    }

    return (
        <form onSubmit={handleSubmit}>
            <>
                <div className="search-container">
                    <div className="search-content card-base1">
                        <h1 className="text-title">Encontre um perfil Github</h1>
                        <input
                            name="userSearch"
                            value={formData.userSearch}
                            type="text"
                            className="user-search"
                            onChange={handleOnChange}
                            placeholder="Usuário Github"
                        />
                        <Button text="Encontrar" />
                    </div>
                </div>
                <div className="user-container">
                    <div className="user-content card-base2">
                        <div className="row-1">
                            <div className="col-1">
                                <img src={formData.avatar_url} alt={formData.userSearch} className="user-image"/>
                            </div>
                            <div className="col-2">
                                <div className="public-generic-repo">
                                    <div className="public-generic-repo2">
                                        <label htmlFor="public_repos" className="label-repo">Repositórios públicos: </label>
                                        <input
                                            name="public_repos"
                                            value={formData.public_repos}
                                            type="text"
                                            onChange={handleOnChange}
                                            className="public-repo"
                                        />
                                    </div>
                                    <div className="public-generic-repo2">
                                        <label htmlFor="followers" className="label-followers">Seguidores: </label>
                                        <input
                                            name="followers"
                                            value={formData.followers}
                                            type="text"
                                            className="public-repo"
                                        />
                                    </div>
                                    <div className="public-generic-repo2">
                                        <label htmlFor="following" className="label-following">Seguindo: </label>
                                        <input
                                            name="following"
                                            value={formData.following}
                                            type="text"
                                            className="public-repo"
                                        />
                                    </div>
                                </div>

                                <div className="form-information card-base2">
                                    <h1 className="information-txt">Informações</h1>
                                    <div className="public-repo-detail">
                                        <label htmlFor="company"><b>Empresa: </b></label>
                                        <input
                                            name="company"
                                            value={formData.company}
                                            type="text"
                                            className="input_txt"
                                        />
                                    </div>
                                    <div className="public-repo-detail">
                                        <label htmlFor="blog"><b>Website/Blog: </b></label>
                                        <input
                                            name="blog"
                                            value={formData.blog}
                                            type="text"
                                            className="input_txt"
                                        />
                                    </div>
                                    <div className="public-repo-detail">
                                        <label htmlFor="location"><b>Localidade: </b></label>
                                        <input
                                            name="location"
                                            value={formData.location}
                                            type="text"
                                            className="input_txt"
                                        />
                                    </div>
                                    <div className="public-repo-detail">
                                        <label htmlFor="created_at"><b>Membro desde: </b></label>
                                        <input
                                            name="created_at"
                                            value={formData.created_at}
                                            type="text"
                                            className="input_txt"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-2">
                            <Button text="Ver perfil" />
                        </div>
                    </div>
                </div>
            </>
        </form>
    );
}

export default Search;