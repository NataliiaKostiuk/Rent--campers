
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
import {RedStar} from '../../assets/RedStar'
import {
  Img, Title, Wrapper, WrapReview, Button, Description,
  Price, Card, WrapTitle, Heartspan, WrapSvg, Span, Review,
} from "../CampersList/CamperCards.styled";

function CutText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...';
  } else {
    return text;
  }
}

export const FavouriteList = () => {

  const isOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();
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
            {favorites && favorites.map((favorite) => {
          if (!favorite) {
            return null;
                } 
       const isFavorite = favorites.some(fav => fav.id === favorite.id);          
    const cutedDescription = CutText(favorite.description, 65);              
                return (
                  
         <Card key={favorite.id}>
            <div>
                <Img src={favorite.gallery[0]} alt="car" />
            </div>
            <div>
                            <WrapTitle>
                                <Title>{favorite.name}</Title>
                                <Price>€{favorite.price}</Price>
                        <Heartspan onClick={() => handleToggleFavorite(favorite.id, favorite) }>
                           {isFavorite ? <RedStar/> : <Heart/>}
                            </Heartspan>
                            </WrapTitle>
                <WrapReview>           
                            <Review><Star/></Review>
                            <Review>{favorite.rating}</Review>
                            <Review>({favorite.reviews.length}reviews)</Review>
                             <Review><Location/>{favorite.location}</Review>
                </WrapReview>      
                   <Description>{cutedDescription}</Description>
                 <WrapSvg>
                            <Span><People />{ favorite.adults} adults</Span>
                            <Span><Automatic/>Automatic</Span>
                            <Span><Refueling/>Petrol</Span>
                            <Span><Kitchen/>Kitchen</Span>
                            <Span><Bed/>{ favorite.bed}beds</Span>
                            <Span><Air/>AC</Span>
                      </WrapSvg> 
                      <Button onClick={() => (handleOpenModal(favorite.id))} >Show more</Button>
                     
              </div>    
         </Card>
                )
              })}
         {isOpen && <ModalShowMore/>}
        </Wrapper>
    )
}



