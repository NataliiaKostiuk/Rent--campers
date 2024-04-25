
import { Location } from "../../assets/Loc"
import { MyForm } from "../Form/TestForm"
import { CampLocatoin,Input, Div, Label, Wrap, LocWrap} from "./Filters.styled"


export const FilterCampers = () => {

    return (
        <Wrap>
           <Div>
                <Label htmlFor="location">
                     <CampLocatoin>Location</CampLocatoin>
                    <Input type="text" name="location" placeholder="Kyiv, Ukraine" />
                              <LocWrap>  <Location /></LocWrap>
                </Label>
            </Div>
            <MyForm/>
        </Wrap>
    )
    
}