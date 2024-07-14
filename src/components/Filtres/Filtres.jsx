
import { Location } from "../../assets/Loc";
import { ChooseForm } from "../Form/TestForm";

import { CampLocatoin, Input, Div, Label, Wrap, LocWrap } from "./Filters.styled"



export const FilterCampers = ({handleCityChange, city, handleSubmit}) => {

    return (
        <Wrap>
           <Div>
                <Label htmlFor="location">
                     <CampLocatoin>Location</CampLocatoin>
                    <Input type="text" name="location" value={city} 
                        onChange={handleCityChange}  placeholder="Kyiv, Ukraine" />
                              <LocWrap>  <Location /></LocWrap>
                </Label>
            </Div>
            <ChooseForm handleSubmit={handleSubmit} />
        </Wrap>
    )
    
}