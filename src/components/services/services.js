import React from 'react';
import PrescriptionRenewal from '../../media/prescription_renewal.jpg';
import Acne from '../../media/acne.jpg';
import Vaccination from '../../media/vaccination.jpg';
import Diabetes from '../../media/diabetes.jpg';
import ServicesStyle from './services.module.scss';

export const Services = () => {
    const medicalServiceTitle1 = "Prescription Renewal";
    const medicalServiceTitle2 = "Acne";
    const medicalServiceTitle3 = "Flu Shot and Vaccination";
    const medicalServiceTitle4 = "Diabetes";
    const medicalServiceTitle5 = "Service Offered";
    const medicalServiceTitle6 = "Service Offered";
//    const medicalServicePrice1 = "50$";
//   const medicalServicePrice2 = "50$";
//    const medicalServicePrice3 = "50$";
//    const medicalServicePrice4 = "50$";
//    const medicalServicePrice5 = "50$";
//    const medicalServicePrice6 = "50$";

    return (
        <div className={ServicesStyle.servicesContainer} id="servicesHash">
            <h1 className={ServicesStyle.servicesTitle}>Services</h1>
            <div className={ServicesStyle.servicesGroupContainer}>
                <div className={ServicesStyle.soloServicesContainer}>
                    <img className={ServicesStyle.servicesImage} src={PrescriptionRenewal} alt="Image of the service offered" />
                    <h4 className={ServicesStyle.servicesTitle}>{medicalServiceTitle1}</h4>
                </div>
                <div className={ServicesStyle.soloServicesContainer}>
                    <img className={ServicesStyle.servicesImage} src={Acne} alt="Image of the service offered" />
                    <h4 className={ServicesStyle.servicesTitle}>{medicalServiceTitle2}</h4>
                </div>
                <div className={ServicesStyle.soloServicesContainer}>
                    <img className={ServicesStyle.servicesImage} src={Vaccination} alt="Image of the service offered" />
                    <h4 className={ServicesStyle.servicesTitle}>{medicalServiceTitle3}</h4>
                </div>
                <div className={ServicesStyle.soloServicesContainer}>
                    <img className={ServicesStyle.servicesImage} src={Diabetes} alt="Image of the service offered" />
                    <h4 className={ServicesStyle.servicesTitle}>{medicalServiceTitle4}</h4>
                </div>
            </div>
        </div>
    )
}