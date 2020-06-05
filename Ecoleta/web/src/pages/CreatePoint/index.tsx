import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    return(
        <div id="page-create-point">
            <div className="content">
            <header>
                <img src={logo} alt="Logo do Ecoleta"/>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>
            <form action="">
                <h1>Cadastro do<br />ponto de coleta</h1>
                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>
                    
                    <div className="field">
                        <label htmlFor="name">Nome da Entidade</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>
                    <Map center={[-23.4664891, -46.5846228]} zoom={15}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <Marker position={[-23.4664891, -46.5846228]} />
                    </Map>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf">
                                <option value="0">Selecione uma UF</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                                <option value="0">Selecione uma cidade</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Itens de coleta</h2>
                        <span>Selecione um ou mais itens abaixo</span>
                    </legend>
                    <ul className="items-grid">
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                            <span>Óleo de Cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                            <span>Óleo de Cozinha</span>
                        </li>
                        <li className="selected">
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                            <span>Óleo de Cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                            <span>Óleo de Cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                            <span>Óleo de Cozinha</span>
                        </li>
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                            <span>Óleo de Cozinha</span>
                        </li>
                    </ul>
                </fieldset>
                <button type="submit">
                    Cadastrar ponto de coleta
                </button>
            </form>
            </div>
        </div>
    );
}

export default CreatePoint;