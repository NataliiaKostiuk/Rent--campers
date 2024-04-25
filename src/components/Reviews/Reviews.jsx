import { SingleCampersSelector } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";
import { Wrap, Name, Text, Container } from "./Reviews.styled";
import { BookingForm } from "../BookingForm/BookingForm";
import { Star } from "assets/Star";

const Reviews = () => {
    const singleCamper = useSelector(SingleCampersSelector);
    return (
        <Container>
            <Wrap> {singleCamper.reviews.map((review, index) => (
        <div key={index}>
            <Name>{review.reviewer_name }</Name>
                    <div>
                     {[...Array(review.reviewer_rating)].map((_, i) => (
                                <Star key={i} />
                            ))}
                    </div>
            <Text>{review.comment }</Text>
        </div>
    ))}
        </Wrap>
        <BookingForm/>
        </Container> 
    )

}

export default Reviews