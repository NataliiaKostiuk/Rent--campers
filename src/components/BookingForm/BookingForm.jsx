import { Formik, Form} from 'formik';
import { Title, SubTitle, ComentInput, Input } from './BooringForm.styled';
import { Button } from '../CampersList/CamperCards.styled'; 

export  const BookingForm = () => {
 
    const handleSubmit = (values) => {
     console.log(values);
 }
  
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        dates: '',
        comment:'', 
      }}
   
 
    onSubmit={(values, actions) => {
      handleSubmit (values)
      actions.resetForm();        
      }} 
    >
          <Form>
              <Title>Book your campervan now</Title>
              <SubTitle>Stay connected! We are always ready to help you.</SubTitle>
      <label htmlFor="name">
          <Input name="name" placeholder="name" />
      </label>
      <label htmlFor="email">
          <Input type="email" name="email" placeholder="email" />
        </label>
      <label htmlFor="date">
          <Input type="dates" name="dates" placeholder="Booking date" />
        </label>
      <label htmlFor="number">
          <ComentInput type="comment" name="comment" placeholder="Comment" />
      </label>
    <Button  type="submit">Send</Button>
      </Form>
    </Formik>)
};