import React, { useState } from 'react';
import Button from '../../../../core/components/Button';
import './styles.scss';
import { makeRequest } from '../../../../core/utils/request';

type FormState = {
    user: string;
    public_repos: string;
    followers: string;
    following: string;
    company: string;
    blog: string;
    location: string;
    created_at: string;
    avatar_url: string;
    html_url: string;
}

const Search = () => {

    const [user, setUser] = useState('');

    const [formData, setFormData] = useState<FormState>({
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

        setUser(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData
        }
        makeRequest({ url: user, method: 'GET', data: payload })
            .then(response => setFormData(response.data))
            .finally(() => setUser(''));                          
    }

    return (
        <>
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <div className="search-content card-base1">
                        <h1 className="text-title">Encontre um perfil Github</h1>
                        <input
                            name="user"
                            value={user}
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
                <div className="user-content card-base2">
                    <div className="row-1">
                        <div className="col-1">
                            <img src={formData.avatar_url} alt={formData.location} className="user-image" />
                        </div>
                        <div className="col-2">
                            <div className="public-generic-repo">
                                <div className="public-generic-repo2">
                                    <label htmlFor="public_repos" className="label-repo">Repositórios públicos: </label>
                                    <input
                                        name="public_repos"
                                        value={formData.public_repos}
                                        type="text"
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
                        <a href={formData?.html_url} target="_blank" rel="noreferrer" className="btn-txt">
                            <Button text="Ver perfil"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;