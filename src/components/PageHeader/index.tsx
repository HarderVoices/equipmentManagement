import React from 'react';

import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/houpa.png';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link className="identidade-houpa" to="/">
                    <img className="logo-houpa" src={LogoImg} alt="houpa"/>
                        <div>
                            <p>Identidade</p>
                            <p>Digital</p>
                            <p>Houpa!</p>
                        </div>
                </Link>
                <div className="desc-tokens">
                    <p>
                        Design Tokens
                        <p>
                            Variáveis Semânticas de Estilo
                        </p>
                    </p>
                </div>
            </div>
        </header> 
    );
}

export default PageHeader;