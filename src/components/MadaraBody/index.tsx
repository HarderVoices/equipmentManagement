import React from 'react';

import { Link } from 'react-router-dom';
import Madara from '../../assets/images/madaram.jpg';
import './styles.css';


function PageHeader() {
    return (
        <div className="madara">
            <Link to="/">
                <img className="minde" src={Madara}></img>
            </Link>
            
        </div>
    );
}

export default PageHeader;