import { SingleCampersSelector } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";
import { People } from "../../assets/People";
import { Automatic } from "../../assets/Automatic";
import { Air } from "../../assets/Air";
import { Refueling } from "../../assets/IconRefueling";
import { Kitchen } from "../../assets/Kitchen";
import { Bed } from "../../assets/Bed";
import { CD } from "../../assets/CD";
import { Radio } from "../../assets/Radio";
import {Freezer} from "../../assets/Freezer";
import {Gas} from "../../assets/Gas";
import {Water} from "../../assets/Water";
import { TW } from "../../assets/TW";
import {Toilet} from "../../assets/Toilet";
import { Shower } from "../../assets/Shower"; 
import {Conditioner} from "../../assets/Conditioner";

import { Span } from "../CampersList/CamperCards.styled";
import { Wrap, WrapSvg, Text,Textspan, WrapDecsr, Title } from './Features.styled';
import { BookingForm } from "../BookingForm/BookingForm";

const Features = () => {
       const singleCamper = useSelector(SingleCampersSelector);
    return (
         <Wrap>
     
       <div>
            <div>
                             <WrapSvg>
                            <Span><People />{ singleCamper.adults} adults</Span>
                            <Span><Automatic/>Automatic</Span>
                            <Span><Refueling/>Petrol</Span>
                        {singleCamper.kitchen!==0 && <Span><Kitchen/>Kitchen</Span>}
                            <Span><Bed/>{ singleCamper.bed}beds</Span>
                             <Span><Air />AC</Span>
                             {singleCamper.conditioner !==0 && <Span><Conditioner />Conditioner</Span>}
                             {singleCamper.TW !==0 && <Span><TW/>TW</Span>}
                             {singleCamper.CD !==0 && <Span><CD/>CD</Span>}
                             {singleCamper.radio !==0 && <Span><Radio/>Radio</Span>}
                             {singleCamper.freezer !==0 && <Span><Freezer />Freezer</Span>}
                             {singleCamper.gas !==0 && <Span><Gas />Gas</Span>}
                             {singleCamper.water !==0 && <Span><Water />Water</Span>}
                             {singleCamper.shower !==0 && <Span><Shower/>Shower</Span>}
                             {singleCamper.toilet !==0 && <Span><Toilet/>Toilet</Span>}
                        </WrapSvg>
           </div>
               <WrapDecsr>
                             <Title>Vehicle details</Title>
                         <div>
                              <Text><Textspan>Form</Textspan><span>{singleCamper.form }</span></Text>
                              <Text><Textspan>Width</Textspan><span>{singleCamper.width }</span></Text>
                              <Text><Textspan>Heigth</Textspan><span>{singleCamper.height }</span></Text>
                              <Text><Textspan>Length</Textspan><span>{singleCamper.length }</span></Text>
                              <Text><Textspan>Tank</Textspan><span>{singleCamper.tank }</span></Text>
                              <Text><Textspan>Consumption</Textspan><span>{singleCamper.consumption }</span></Text>
                                  
                         </div>           
               </WrapDecsr>             
        </div>
        <BookingForm/>
    
         </Wrap>

         
    )

}

export default Features