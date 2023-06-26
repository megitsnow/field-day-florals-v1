import React from 'react'
import WelcomeImage from '../images/IMG_6840.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import '../index.css';

function WelcomeSection() {

    const navigate = useNavigate();
    const handleClick = () => navigate('/about');

    return (
        <div class="container mt-2 mb-4">
            <div class="row text-center">
            <div class="col-md-6"><img src = {WelcomeImage} className="aboutHomeImage center-block" alt = "April, arranging florals in San Francisco, CA"/></div>
            <div class="col-md-6 d-flex aligns-items-center justify-content-center flex-column"> 
            <div>
                <h1 className = "text-center aboutHomeHeading">Hi, I am April!</h1>
                <p><em>Owner of Field Day Florals</em></p>
                <p class="text-center text-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam optio qui illum dolor consequuntur excepturi nulla ut doloribus quis tempore, ab magni libero, iure repellendus saepe reiciendis. Temporibus, dicta accusantium laboriosam architecto nostrum voluptas praesentium rerum beatae nesciunt reiciendis est quibusdam distinctio ipsum voluptatem nihil dolores eveniet doloremque cum obcaecati?</p>
                <button className = "aboutButton" onClick = {handleClick}>Learn More</button>
            </div></div>
            </div>
        </div>
    )
}

export default WelcomeSection;