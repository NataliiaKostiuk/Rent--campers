
import { AllCampersSelector } from "../../redux/campers/selectors";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/ModalSlice";
import { ModalShowMore } from "../ModalShowMore/ModalShowMore";
import { selectIsModalOpen } from "../../redux/modal/Selectors";
import { selectFavourite } from "../../redux/Favourite/selector";
import { addToFavorites } from "../../redux/Favourite/FavouriteSlice";
import { removeFromFavorites } from "../../redux/Favourite/FavouriteSlice";
import { Heart } from "../../assets/Heart";
import { People } from "../../assets/People";
import { Automatic } from "../../assets/Automatic";
import { Air } from "../../assets/Air";
import { Refueling } from "../../assets/IconRefueling";
import { Kitchen } from "../../assets/Kitchen";
import { Bed } from "../../assets/Bed";
import { Location } from "../../assets/Loc";
import { Star } from "../../assets/Star";
import { RedStar } from '../../assets/RedStar';
import {
  Img, Title, Wrapper, WrapReview, Button, Description,
  Price, Card, WrapTitle, Heartspan, WrapSvg, Span, Review,
} from "./CamperCards.styled";



function CutText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...';
  } else {
    return text;
  }
}

export const CampersCards = () => {
  const isOpen = useSelector(selectIsModalOpen);
    const dispatch = useDispatch();
  const allCampers = useSelector(AllCampersSelector);
  const favorites = useSelector(selectFavourite);
  
 
    const handleToggleFavorite = (id, item) => {
    const isFavorite = favorites.some(fav => fav.id === id);
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites({ id, item }));
      }
      
  };

  const handleOpenModal = (id) => {
    dispatch(openModal(id));
  };

    return (
        <Wrapper>
              {allCampers && allCampers.map((camper) => {
          if (!camper) {
            return null;
                } 
       const isFavorite = favorites.some(fav => fav.id === camper.id);          
    const cutedDescription = CutText(camper.description, 65);              
                return (
                  
         <Card key={camper.id}>
            <div>
                <Img src={camper.gallery[0]} alt="car" />
            </div>
            <div>
                            <WrapTitle>
                                <Title>{camper.name}</Title>
                                <Price>€{camper.price}</Price>
                        <Heartspan onClick={() => handleToggleFavorite(camper.id, camper) }>
                           {isFavorite ? <RedStar/> : <Heart/>}
                            </Heartspan>
                            </WrapTitle>
                <WrapReview>           
                            <Review><Star/></Review>
                            <Review>{camper.rating}</Review>
                            <Review>({camper.reviews.length}reviews)</Review>
                             <Review><Location/>{camper.location}</Review>
                </WrapReview>      
                   <Description>{cutedDescription}</Description>
                 <WrapSvg>
                            <Span><People />{ camper.adults} adults</Span>
                            <Span><Automatic/>Automatic</Span>
                            <Span><Refueling/>Petrol</Span>
                        {camper.kitchen && <Span><Kitchen/>Kitchen</Span>}
                            <Span><Bed/>{ camper.bed}beds</Span>
                            <Span><Air/>AC</Span>
                      </WrapSvg> 
                      <Button onClick={() => (handleOpenModal(camper.id))} >Show more</Button>

              </div>    
         </Card>
                )
              })}
         {isOpen && <ModalShowMore/>}
        </Wrapper>
    )
}