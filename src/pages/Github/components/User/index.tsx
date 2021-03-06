import React from 'react';
import { UserResponse } from '../../../../core/types/User';
import Button from '../../../../core/components/Button';
import './styles.scss';
import ImageLoader from '../Loaders/ImageLoader';
import InfoLoader from '../Loaders/InfoLoader';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

type Props = {
    userResponse: UserResponse;
    loading: boolean;
}

dayjs.locale('pt-br');

const dateFromNow = (date: string) => {
    return dayjs(date).format('DD/MM/YYYY');;
}

const User = ({ userResponse, loading }: Props) => {

    return (
        <>
            <div className="row-1">
                <div className="col-1">
                    {loading ? <ImageLoader /> : (
                        <>
                            <div>
                                <img src={userResponse.avatar_url} alt={userResponse.location} className="user-image" />
                            </div>
                            <div className="btn-container-profile">
                                <a href={userResponse?.html_url} target="_blank" rel="noreferrer" className="btn-content-profile">
                                    <Button text="Ver perfil" />
                                </a>
                            </div>
                        </>
                    )}
                </div>
                <div className="col-2">
                    {loading ? <InfoLoader /> : (
                        <>
                            <div className="public-generic-repo">
                                <div className="public-generic-repo2">
                                    <label htmlFor="public_repos" className="label-repo">Repositórios públicos: </label>
                                    <input
                                        name="public_repos"
                                        defaultValue={userResponse.public_repos}
                                        type="text"
                                        className="public-repo"
                                    />
                                </div>
                                <div className="public-generic-repo2">
                                    <label htmlFor="followers" className="label-followers">Seguidores: </label>
                                    <input
                                        name="followers"
                                        defaultValue={userResponse.followers}
                                        type="text"
                                        className="public-repo"
                                    />
                                </div>
                                <div className="public-generic-repo2">
                                    <label htmlFor="following" className="label-following">Seguindo: </label>
                                    <input
                                        name="following"
                                        defaultValue={userResponse.following}
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
                                        defaultValue={userResponse.company}
                                        type="text"
                                        className="input_txt"
                                    />
                                </div>
                                <div className="public-repo-detail">
                                    <label htmlFor="blog"><b>Website/Blog: </b></label>
                                    <input
                                        name="blog"
                                        defaultValue={userResponse.blog}
                                        type="text"
                                        className="input_txt"
                                    />
                                </div>
                                <div className="public-repo-detail">
                                    <label htmlFor="location"><b>Localidade: </b></label>
                                    <input
                                        name="location"
                                        defaultValue={userResponse.location}
                                        type="text"
                                        className="input_txt"
                                    />
                                </div>
                                <div className="public-repo-detail">
                                    <label htmlFor="created_at"><b>Membro desde: </b></label>
                                    <input
                                        name="created_at"
                                        defaultValue={dateFromNow(userResponse.created_at)}
                                        type="text"
                                        className="input_txt"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default User;