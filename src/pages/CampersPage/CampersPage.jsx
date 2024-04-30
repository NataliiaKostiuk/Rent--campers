
import { FilterCampers } from "../../components/Filtres/Filtres";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AllCampersSelector } from  "../../redux/campers/selectors";
import { getCampersThunk } from "../../redux/campers/CampersThunk";
import { CampersCards } from "../../components/CampersList/CampersCards";
import { Container } from "./CampersPage.styled";
import { useState } from "react";

const CampersPage = () => {
    const [city, setCity] = useState('');
    const campers = useSelector(AllCampersSelector);
    const dispatch = useDispatch();

    	useEffect(() => {
		!campers && dispatch(getCampersThunk())
	}, [dispatch, campers])

        const handleCityChange = (event) => {
            setCity(event.target.value);
    }; 
    const filteredByLocation = campers && campers.filter(camper =>
        camper.location.toLowerCase().includes(city.toLowerCase()));
    
    const handleSubmit = (values) => {
        console.log(values);

    }
    return (
        <Container>  
            <FilterCampers handleCityChange={handleCityChange} city = {city} handleSubmit={handleSubmit} />
            <CampersCards campers={filteredByLocation } />
        </Container>
    )
    
}

export default CampersPage
