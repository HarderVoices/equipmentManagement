import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import MadaraBody from '../../components/MadaraBody';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis.">
               <form id="search-teachers">
                   <div className="input-block">
                       <label htmlFor="subject">Matéria</label>
                       <input type="text" id="subject" placeholder="Tengai"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="week_day">Dia da semana</label>
                       <input type="text" id="week_day"  placeholder="10/08/2020"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="time">Hora</label>
                       <input type="text" id="time"  placeholder="12:30 PM"/>
                   </div>
               </form>
           </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>

           {/* <MadaraBody/> */}
        </div>
    )
}

export default TeacherList;