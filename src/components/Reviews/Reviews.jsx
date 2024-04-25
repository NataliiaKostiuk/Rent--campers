import { SingleCampersSelector } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";
import { Wrap, Name, Text, Container } from "./Reviews.styled";
import { BookingForm } from "../BookingForm/BookingForm";

const Reviews = () => {
const singleCamper = useSelector(SingleCampersSelector);    
    return (
        <Container>
            <Wrap> {singleCamper.reviews.map((review, index) => (
        <div key={index}>
            <Name>{review.reviewer_name }</Name>
            <div>{review.reviewer_rating }Stars</div>
            <Text>{review.comment }</Text>
        </div>
    ))}
        </Wrap>
        <BookingForm/>
        </Container> 
    )

}

export default Reviews