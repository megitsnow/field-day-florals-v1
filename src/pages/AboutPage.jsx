import FlowerImage from '../images/IMG_6682.jpg'
import AboutApril from '../components/AboutApril'

export default function AboutPage() {
    return(
        <div>
            <div>
                <AboutApril/>
            </div>
            <div className = "aboutImageDiv">
                <img src = {FlowerImage} className = "aboutPageImage"/>
                <div class="centeredAbout">April created the most beautiful arrangements for my wedding! Cannot thank her enough for going above and beyond!</div>
            </div>
        </div>

        

    )
}