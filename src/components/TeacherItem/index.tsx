import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pm1.narvii.com/6611/ca93e636b74df7d7fc14f64e619acb853c1e1b62_hq.jpg" alt="Madara uchiha"/>
                <div>
                    <strong>Madara Uchiha</strong>
                    <span>Tengai Shinsei</span>
                </div>
            </header>
            
            <p>
                Madara Uchiha é um personagem fictício de mangá e anime da série Naruto criada por Masashi Kishimoto.  
                <br/>
                Madara Uchiha é o principal antagonista na franquia Naruto e, devido principalmente a seu enorme ego, 
                ele está sempre em confronto com a sensibilidade de Hashirama Senju. Apesar de ser um prodígio, 
                sua personalidade egoísta e manipuladora o mantêm em confronto eterno com todo mundo que o rodeia.
            </p>
            
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 1500,00</strong>
                </p>
                <button type="button"><img src={whatsappIcon} alt="Entrar em contato"/>Entrar em contato</button>
            </footer>
        </article>
    )
}

export default TeacherItem;
