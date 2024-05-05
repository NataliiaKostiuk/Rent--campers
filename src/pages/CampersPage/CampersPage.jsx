
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
    const [filterCampers, setfilterCampers]=useState([])
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

        const filteredCampers = [];
        const arrayKeys = Object.keys(values);
        const arrCheckedKeys = arrayKeys.splice(0, 1);
        for (let i = 0; i < arrayKeys.length; i++) {
            campers && campers.map((camper) => {
                if (camper.conditioner === arrayKeys[i] || camper.conditioner !== 0) {
                    filteredCampers.push(camper)
                }
                if (camper.automatic === arrayKeys[i] || camper.automatic !== 0) {
                    filteredCampers.push(camper)
                }
                if (camper.kitchen === arrayKeys[i] || camper.kitchen !== 0) {
                    filteredCampers.push(camper)
                }
                if (camper.TW === arrayKeys[i] || camper.TW !== 0) {
                    filteredCampers.push(camper)
                }
                if (camper.shower === arrayKeys[i] || camper.shower !== 0) {
                    filteredCampers.push(camper)
                }
                if (camper.form === arrayKeys[i] || camper.TW === 'van') {
                    filteredCampers.push(camper)
                }
                if (camper.form === arrayKeys[i] || camper.form === 'alcove') {
                    filteredCampers.push(camper)
                }
                if (camper.form === arrayKeys[i] || camper.form === 'fullyIntegrated') {
                    filteredCampers.push(camper)
                }
               
            })
        } 
        const uniqueFilteredCampers = filteredCampers.filter((camper, index, self) =>
            index === self.findIndex((c) =>
                c.conditioner === camper.conditioner
                && c.automatic === camper.automatic
                && c.TW === camper.TW
                && c.kitchen === camper.kitchen
                && c.shower === camper.shower
                && c.form === camper.form
            )
        );
        setfilterCampers(uniqueFilteredCampers)
    }


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
