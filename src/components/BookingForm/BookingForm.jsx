import { Formik, Form} from 'formik';
import { Title, SubTitle, ComentInput, Input, Label} from './BooringForm.styled';
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
      <Label htmlFor="name">
          <Input name="name" placeholder="name" />
      </Label>
      <Label htmlFor="email">
          <Input type="email" name="email" placeholder="email" />
        </Label>
      <Label htmlFor="date">
          <Input type="dates" name="dates" placeholder="Booking date" />
        </Label>
      <Label htmlFor="number">
          <ComentInput type="comment" name="comment" placeholder="Comment" />
      </Label>
    <Button  type="submit">Send</Button>
      </Form>
    </Formik>)
};