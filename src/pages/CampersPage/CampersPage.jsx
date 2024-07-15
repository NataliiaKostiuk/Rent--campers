
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
    const [filterCampers, setfilterCampers] = useState([]);
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
        const arrayKeys = Object.keys(values);
        
        const filteredCampers = campers.filter(camper => {
            return arrayKeys.every(key => {
                if (key === 'conditioner') return camper.conditioner !== 0;
                if (key === 'automat') return camper.transmission === 'automat';
                if (key === 'kitchen') return camper.kitchen !== 0;
                if (key === 'shower') return camper.shower !== 0;
                if (key === 'TW') return camper.TW !== 0;
                if (key === 'van') return camper.form === 'panelTruck';
                if (key === 'fullyIntegreted') return camper.form === 'fullyIntegrated';
                if (key === 'alcove') return camper.form === 'alcove';
                return true; 
            });
        });

        setfilterCampers(filteredCampers);
    
    }


    return (
        <Container>
            <FilterCampers handleCityChange={handleCityChange} city = {city} handleSubmit={handleSubmit}/>
            
            {filterCampers.length > 0 ? (
  <CampersCards campers={filterCampers} />
) : (
  <CampersCards campers={filteredByLocation} />
)}
        </Container>
    )
    
}


export default CampersPage

