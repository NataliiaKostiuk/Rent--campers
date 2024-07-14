
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
    console.log(campers);
    

    const handleSubmit = (values) => {
        const arrayKeys = Object.keys(values);
        console.log(arrayKeys); 
        
        if (arrayKeys.includes('conditioner')) {
            const filteredByConditioner = campers.filter(({ conditioner }) => conditioner !== 0)
            setfilterCampers(filteredByConditioner);
        }
        if (arrayKeys.includes('automat')) {
            const filteredByAutomat = filterCampers.filter(({ transmission }) => transmission === 'automat')
            setfilterCampers(filteredByAutomat);
            }
        if (arrayKeys.includes('kitchen')) {
            const filteredByKitchen = filterCampers.filter(({ kitchen }) => kitchen !== 0)
            setfilterCampers(filteredByKitchen);
        }
        if (arrayKeys.includes('shower')) {
            const filteredByShower = filterCampers.filter(({ shower }) => shower !== 0)
            setfilterCampers(filteredByShower);
        }
        if (arrayKeys.includes('TW')) {
            const filteredByTW = filterCampers.filter(({ TW}) => TW !== 0)
            setfilterCampers(filteredByTW);
        }
        if (arrayKeys.includes('van')) {
            const filteredByVan = filterCampers.filter(({ form }) => form === 'panelTruck')
            setfilterCampers(filteredByVan);
        } 
         if (arrayKeys.includes('fullyIntegreted')) {
            const filteredByFullyInt = filterCampers.filter(({ form }) => form === 'fullyIntegrated')
            setfilterCampers(filteredByFullyInt);
        } 
         if (arrayKeys.includes('alcove')) {
            const filteredByalcove = filterCampers.filter(({ form }) =>form === 'alcove')
            setfilterCampers(filteredByalcove);
            } 
         console.log(filterCampers);
    }

 console.log(filterCampers);

    return (
        <Container>
            <FilterCampers handleCityChange={handleCityChange} city = {city} handleSubmit={handleSubmit} />
            
            {filterCampers.length > 0 ? (
  <CampersCards campers={filterCampers} />
) : (
  <CampersCards campers={filteredByLocation} />
)}
        </Container>
    )
    
}


export default CampersPage

