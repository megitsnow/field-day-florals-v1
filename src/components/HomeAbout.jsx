import React from 'react'
import WelcomeImage from '../images/IMG_6840.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css';

function WelcomeSection() {
    return (
        <div class="container mt-2">
            <div class="row">
            <div class="col-md-6 mb-0"><img src = {WelcomeImage} className="h-100 w-100" alt = "Megan with her dog, Arwen"/></div>
            <div class="col-md-6 d-flex aligns-items-center justify-content-center flex-column"> 
            <div>
                        <h1 className = "text-center display-1">Hi, I am April!</h1>
                        <p class="text-center text-paragraph">Hi, I am Megan. I am a former finance professional and full stack software engineer with a keen eye for the details.</p>
                    </div></div>
            </div>
        </div>
    )
}

export default WelcomeSection;