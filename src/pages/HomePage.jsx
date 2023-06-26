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
            <h2 className = "heading homePageText text-center">Wedding, Event & Corporate Florals</h2>
            <p className = "text-center text-paragraph homePageText">From small events and corporate dinners to elopments and large weddings, we have your flower needs covered! Hello my name is Megan I am testing this to see how this goes with large amounts of text.</p>
        <button className = "servicesButton" onClick = {handleClick}>Services</button>
        </div>
        <div className = "photoCollage mb-4">
            <PhotoAlbum photos = {photos} layout = "masonry"/>
        </div>
        <WelcomeSection/>
        </div>
        </div>
    )
}