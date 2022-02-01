import React from 'react';
import ContactStyle from './contact.module.scss';
import FacebookIcon from '../../media/facebook_icon.png';
import TwitterIcon from '../../media/twitter_icon.png';
import IndeedIcon from '../../media/indeed_icon.png';

export const Contact = () => {
    return (
        <div className={ContactStyle.contactContainer} id="contactHash">
            <div>
                <h1>Contact Us</h1>
            </div>
            <div className={ContactStyle.contacInfo}>
                <p><strong>Location: </strong>123 Fake Street</p>
                <p><strong>Phone Number: </strong><a href="tel:+9-123-456-7890" className={ContactStyle.numberStyle}>123-456-7890</a></p>
                <p><strong>Fax Number: </strong><a href="tel:+9-098-765-4321" className={ContactStyle.numberStyle}>098-765-4321</a></p>
                <div>
                    <img className={ContactStyle.iconStyle} src={FacebookIcon} alt="Facebook icon" />
                    <img className={ContactStyle.iconStyle} src={TwitterIcon} alt="Twitter icon" />
                    <img className={ContactStyle.iconStyle} src={IndeedIcon} alt="Indeed icon" />
                </div>
            </div>
        </div>
    )
}