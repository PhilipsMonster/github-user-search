import React, { useState } from 'react';
import Button from '../../../../core/components/Button';
import { ReactComponent as Profile } from '../../../../core/assets/images/img-profile.svg'
import './styles.scss';
import { makeRequest } from '../../../../core/utils/request';

type FormState = {
    repository: string;
    followers: string;
    following: string;
    company: string;
    website: string;
    city: string;
    member: string;
}

const Search = () => {
    const [formData, setFormData] = useState<FormState>({
        repository: '',
        followers: '',
        following: '',
        company: '',
        website: '',
        city: '',
        member: ''
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
        makeRequest({ url: '/philipsmonster', method: 'GET', data: payload })
        .then((res) => {
            console.log(res);            
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <>
                <div className="search-container">
                    <div className="search-content card-base1">
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
                <div className="user-container">
                    <div className="user-content card-base2">
                        <div className="row-1">
                            <div className="col-1">
                                <Profile />
                            </div>
                            <div className="col-2">
                                <input
                                    name="repository"
                                    value={formData.repository}
                                    type="text"
                                    className="public-repo card-base2 public-generic-repo"
                                    onChange={handleOnChange}
                                    placeholder="Repositórios públicos: "
                                />
                                <input
                                    name="followers"
                                    value={formData.followers}
                                    type="text"
                                    className="public-followers card-base2 public-generic-repo"
                                    placeholder="Seguidores: "
                                />
                                <input
                                    name="following"
                                    value={formData.following}
                                    type="text"
                                    className="public-following card-base2 public-generic-repo"
                                    placeholder="Seguindo: "
                                />
                                <div className="form-information card-base2">
                                    <h1 className="information-txt">Informações</h1>
                                    <input
                                        name="company"
                                        value={formData.company}
                                        type="text"
                                        className="public-repo-detail"
                                        placeholder="Empresa: "
                                    />
                                    <input
                                        name="website"
                                        value={formData.website}
                                        type="text"
                                        className="public-repo-detail"
                                        placeholder="Website/Blog: "
                                    />
                                    <input
                                        name="city"
                                        value={formData.city}
                                        type="text"
                                        className="public-repo-detail"
                                        placeholder="Localidade: "
                                    />
                                    <input
                                        name="member"
                                        value={formData.member}
                                        type="text"
                                        className="public-repo-detail"
                                        placeholder="Membro desde: "
                                    />
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