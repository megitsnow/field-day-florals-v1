import PhotoAlbum from "react-photo-album";
import WelcomeSection from "../components/HomeAbout";
import HomeOpening from "../components/HomeOpening";
import { useNavigate } from 'react-router-dom';
import '../index.css';


export default function HomePage({photos, setting}) {
    const navigate = useNavigate();
    const handleClick = () => navigate('/services');

    return (
        <div>
        <div>
        <HomeOpening/>
        <div className="d-flex flex-column justify-content-center align-items-center mb-4">
        <h2 className = "heading">Wedding, Event & Corporate Florals</h2>
        <p className = "text-center text-paragraph">From small events and corporate dinners to elopments and large weddings, we have your flower needs covered! </p>
        <button className = "servicesButton" onClick = {handleClick}>Services</button>
        </div>
        <PhotoAlbum photos = {photos} layout = "masonry"/>
        <WelcomeSection/>
        </div>
        </div>
    )
}