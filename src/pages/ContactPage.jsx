import ContactMe from '../components/ContactForm'
import FlowerBouquet from '../images/IMG_2357.jpg'

export default function ContactPage() {
    return(
        <div className = "container mt-4">
            <div className ="row text-center">
                <div className = "col-md-6 mb-2">
                    <img src = {FlowerBouquet} class= "contactMeImage"/>
                </div>
                <div className = "col-md-6">
                    <ContactMe/>
                </div>
            </div>
        </div>
    ) 
}