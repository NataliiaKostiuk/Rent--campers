import { SingleCampersSelector } from "../../redux/campers/selectors";
import { useSelector, useDispatch } from "react-redux";
import { Backdrop, ClBtn, WrapBtn, Container, Botton, Price, Reviewdiv, Img, Imgdiv, Review, Title } from "./ModalShowMore.styled"
import { getSingleCamperThunk } from "../../redux/campers/CampersThunk";
import { useEffect } from "react";
import { selectSelectedId } from "../../redux/modal/Selectors";
import { Star } from '../../assets/Star';
import { Location } from '../../assets/Loc';
import { CloseBtn } from '../../assets/CloseBnt';
import { closeModal } from "../../redux/modal/ModalSlice";
import { Outlet} from "react-router-dom";
import { Suspense } from "react";




export const ModalShowMore = () => {
     
    const dispatch = useDispatch();
    const selectId = useSelector(selectSelectedId);
    const singleCamper = useSelector(SingleCampersSelector);

	useEffect(() => {
	 if (!singleCamper) {
            dispatch(getSingleCamperThunk(selectId));
        }
    }, [dispatch, singleCamper,selectId])
   
      const handleCloseModal = () => {
    dispatch(closeModal());
  };
    return (
        <Backdrop>
            <Container>
                <ClBtn onClick={handleCloseModal}><CloseBtn/></ClBtn>
                {singleCamper && (
                    <>
                        <Title>{singleCamper.name}</Title>
                        <Reviewdiv>
                            <Review><Star />{singleCamper.rating}</Review>
                            <Review>({singleCamper.reviews.length} Reviews)</Review>
                            <Review><Location/>{singleCamper.location}</Review>
                        </Reviewdiv>
                        <Price>€{singleCamper.price}</Price>
                        <Imgdiv> {singleCamper.gallery.map((image, index) => (
                                <Img key={index} src={image} />
                        ))}
                        </Imgdiv>
                        <div>{singleCamper.description}</div>
                        <WrapBtn>
                            <Botton to={`/campers/${singleCamper.id}/features`} >Features</Botton>
                            <Botton to={`/campers/${singleCamper.id}/reviews`} >Reviews</Botton>
                                 <Suspense fallback={<div>Loading...</div>}>
                         <Outlet />
                                </Suspense>
                        </WrapBtn> 
                    </>
                )}
            </Container>

        </Backdrop>
        
    )
}