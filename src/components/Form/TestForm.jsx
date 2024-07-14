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
import { useState } from "react";


export const ChooseForm = ({handleSubmit}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return(

      <Formik
       initialValues={{
        checked: [],
        }}
       
      onSubmit={(checked, actions) => {
        handleSubmit(checked)
        setIsSubmitted(true)
        actions.resetForm()
         setIsSubmitted(false)
        }}
    >
      {({ values }) => (
        <Form>
        
          <Filerdiv>Filters</Filerdiv>
          <VehDiv>Vehicle equipment</VehDiv>
          <ContainerFirst >
            <Label
              checked={values.conditioner} isSubmitted={isSubmitted}>
              <Div><Air /><Span>AC</Span></Div>
              <Fields name="conditioner"type="checkbox"/>
             
            </Label>
            <Label  checked={values.automat} isSubmitted={isSubmitted}>
              <Div><Automatic /><Span>Automatic</Span></Div>
              <Fields name="automat" type="checkbox" />
             
            </Label>
            <Label  checked={values.kitchen} isSubmitted={isSubmitted}>
              <Div><Kitchen /><Span>Kitchen</Span></Div>
              <Fields name="kitchen"type="checkbox"/>
            
            </Label>
            <Label  checked={values.TW} isSubmitted={isSubmitted}>
              <Div><TW /><Span>TW</Span></Div>
              <Fields name="TW" type="checkbox" />
             
            </Label>
            <Label  checked={values.shower} isSubmitted={isSubmitted}>
              <Div><Shower /><Span>Shower</Span></Div>
              <Fields name="shower" type="checkbox"/>
              
            </Label>
          </ContainerFirst>
        
          <VehDiv>Vehicle type</VehDiv>
          <ContainerFirst>
            <Label  checked={values.van} isSubmitted={isSubmitted}>
              <Div><CamperOne /><Span>Van</Span></Div>
              <Fields name="van" type="checkbox"  />
            
            </Label>
            <Label  checked={values.fullyIntegreted} isSubmitted={isSubmitted}>
              <Div><CamperTwo /><Span>Fully <br /> Integrated</Span></Div>
              <Fields name="fullyIntegreted" type="checkbox"   />
              
            </Label>
            <Label  checked={values.alcove} isSubmitted={isSubmitted}>
              <Div><CamperTree /><Span>Alcove</Span></Div>
              <Fields name="alcove" type="checkbox" />
              
            </Label>
          </ContainerFirst>

          <Button type="submit">Search</Button>
          <Button type="submit">Show All</Button>
        </Form>
      )}
    </Formik>
  ) 
};

