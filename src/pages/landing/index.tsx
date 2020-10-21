import React from 'react';
import './styles.css';
import $ from 'jquery';
import h from '../../assets/images/icon_h.png';
import equipe from '../../assets/images/equipe.png';

// $("input").on("blur", function() {
//     if( $(this).val().length > 0 ) {
//         $(this).addClass("fill");
//     } else {
//         $(this).removeClass("fill");
//     }
// })

function Landing() {
    
    return (
        <div id="page-landing">
            <div className="content-top">

                <div className="content-left">
                   <img className="logoHoupa" src={h} alt=""/>

                   <label className="label-title">
                    <input placeholder="Insira seu email" className="input-login" type="text"/>
                    <span className="span-desc" id="email">Email</span>
                   </label> 

                   <label className="label-title">
                    <input placeholder="Insira sua senha" className="input-login" type="password"/>
                    <span className="span-desc" id="password">Senha</span>
                   </label>

                   <button className="button-login" type="submit">Login</button>
                   <a href="#" className="style-esqueci-senha">Esqueci a senha</a>

                    <div className="termos-uso">
                        <a href="#" className="termos" target="_blank">Termos de uso</a>
                    </div>
                </div>

                <div className="content-right">
                    <p className="title-team">Gestão de equipamentos houpa!</p>
                    <img className="equipe" src={equipe} alt=""/>
                </div>

            </div>
        </div>
    )
}

export default Landing;