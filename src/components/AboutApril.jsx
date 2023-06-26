import React from 'react'
import WelcomeImage from '../images/IMG_6840.jpg'
import Wedding from '../images/wedding.png'
import MakingArrangment from '../images/IMG_6703.jpg'
import GirlsOnRun from '../images/IMG_8011.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function AboutApril() {

    const navigate = useNavigate();
    const handleClick = () => navigate('/contact');

    return (
        <div class="container mt-4 mb-5">
            <div class="row text-center mb-4">
            <div class="col-md-6 d-flex aligns-items-center justify-content-center flex-column mb-4"> 
            <div>
                <div><img src = {WelcomeImage} className="aboutHomeImage center-block" alt = "April, arranging florals in San Francisco, CA"/>
                </div>
                <h1 className = "text-center aboutHomeHeading">Hi, I am April!</h1>
                <p><em>Owner of Field Day Florals</em></p>
                <p class="text-center text-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam optio qui illum dolor consequuntur excepturi nulla ut doloribus quis tempore, ab magni libero, iure repellendus saepe reiciendis. Temporibus, dicta accusantium laboriosam architecto nostrum voluptas praesentium rerum beatae nesciunt reiciendis est quibusdam distinctio ipsum voluptatem nihil dolores eveniet doloremque cum obcaecati?</p>
                <button className = "aboutButton" onClick = {handleClick}>Contact Me!</button>
            </div>
            </div>
                <div className = "col-md-6">
                <div>
                    <img src = {Wedding} className="aboutHomeImage center-block picOneAbout" alt = "April, arranging florals in San Francisco, CA"/>
                    <div className = "picTwoAbout"><img src = {MakingArrangment} className="aboutHomeImage center-block" alt = "April, arranging florals in San Francisco, CA"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

