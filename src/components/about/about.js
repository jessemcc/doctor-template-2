import React from 'react';
import DoctorImg from '../../media/doctor_image.jpg';
import AboutStyle from './about.module.scss';

export const About = () => {
const doctorName = "Head Doctor";

const qualification1 = "Qual1";
const qualification2 = "Qual2";
const qualification3 = "Qual3";
const qualification4 = "Qual4";
const qualification5 = "Qual5";
const qualification6 = "Qual6";

    return (
        <div className={AboutStyle.aboutContainer} id="aboutHash">
            <div className={AboutStyle.imageContainer}>
                <h1 className={AboutStyle.phoneOnly}>About {doctorName}</h1>
                <img className={AboutStyle.imageStyle} src={DoctorImg} alt="Image of Doctor" />
            </div>
            <div className={AboutStyle.infoContainer}>
                <h1 className={AboutStyle.desktopOnly}>About {doctorName}</h1>
                <h4>Qualifications</h4>
                <ul className={AboutStyle.listStyle}>
                    <li>{qualification1}</li>
                    <li>{qualification2}</li>
                    <li>{qualification3}</li>
                    <li>{qualification4}</li>
                    <li>{qualification5}</li>
                    <li>{qualification6}</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Aenean mattis pellentesque 
                    lacus, quis egestas purus efficitur et. 
                    Suspendisse aliquet congue velit tincidunt 
                    consequat. Curabitur auctor dolor sed nisl 
                    efficitur lobortis. Ut id nisi at mauris 
                    dapibus mattis. Morbi molestie sollicitudin 
                    auctor. Nulla eu venenatis ex. Proin semper 
                    lacus in justo ultrices dignissim. Aenean sit 
                    amet pretium ante. Vivamus congue condimentum 
                    dui, et elementum justo sagittis vitae. Nam 
                    vehicula mattis ipsum a tincidunt. Aliquam 
                    vitae vulputate ipsum. Pellentesque ac 
                    molestie lectus. Curabitur nec tincidunt mi.</p>
            </div>
        </div>
    )
}