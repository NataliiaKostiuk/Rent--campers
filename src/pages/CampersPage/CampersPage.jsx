
import { FilterCampers } from "../../components/Filtres/Filtres";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AllCampersSelector } from  "../../redux/campers/selectors";
import { getCampersThunk } from "../../redux/campers/CampersThunk";
import { CampersCards } from "../../components/CampersList/CampersCards";
import { Container } from "./CampersPage.styled";

const CampersPage = () => {
    const allCampers = useSelector(AllCampersSelector);
    const dispatch = useDispatch();

    	useEffect(() => {
		!allCampers && dispatch(getCampersThunk())
	}, [dispatch, allCampers])
    

    return (
        <Container>  
            <FilterCampers />
            <CampersCards/>
        </Container>
    )
    
}

export default CampersPage
