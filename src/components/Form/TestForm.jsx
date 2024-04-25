import { Formik, Form } from "formik";
import { Air } from "../../assets/Air";
import { Automatic } from "../../assets/Automatic";
import { Kitchen } from "../../assets/Kitchen";
import { TW } from '../../assets/TW';
import { Shower } from '../../assets/Shower';
import { CamperOne } from '../../assets/Camper1';
import { CamperTwo } from '../../assets/Camper2';
import { CamperTree } from '../../assets/Camper3';
import { Fields,Label, Button, Div, Span, VehDiv,ContainerFirst, Filerdiv } from './TestForm.styled';


export const MyForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  }
  return(

      <Formik
       initialValues={{
          conditioner: '',
        automat: '',
        kitchen: '',
        TW: '',
        shower: '',
        camper:'',
        }}
       
      onSubmit={(values, actions) => {
          handleSubmit(values)
          actions.resetForm();
        }}
    >
  
      <Form>
        
        <Filerdiv>Filters</Filerdiv>
        <VehDiv>Vehicle equipment</VehDiv>
          <ContainerFirst >
          <Label>
          <Div><Air /><Span>AC</Span></Div>  
              <Fields name="conditioner"/>
             
            </Label>
          <Label>
           <Div><Automatic/><Span>Automatic</Span></Div> 
              <Fields name="automat" />
             
            </Label>
          <Label>
           <Div><Kitchen/><Span>Kitchen</Span></Div> 
              <Fields name="kitchen" />
            
          </Label>
          <Label>
            <Div><TW/><Span>TW</Span></Div>
              <Fields name="TW"/>
             
          </Label>
          <Label>
           <Div><Shower/><Span>Shower</Span></Div>
              <Fields name="shower"/>
              
          </Label>
        </ContainerFirst>
        
        <VehDiv>Vehicle type</VehDiv>
        <ContainerFirst>
          <Label>
            <Div><CamperOne/><Span>Van</Span></Div>
              <Fields name="camper"  />
            
          </Label>
          <Label>
            <Div><CamperTwo/><Span>Fully <br/> Integrated</Span></Div>
              <Fields name="camper" />
              
          </Label>
          <Label>
            <Div><CamperTree/><Span>Alcove</Span></Div>
              <Fields name="camper" />
              
          </Label>          
          </ContainerFirst>

          <Button type="submit">Search</Button>
        </Form>

    </Formik>
  ) 
};

