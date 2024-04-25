
import { createAsyncThunk } from '@reduxjs/toolkit';
 
import { getAllCampersApi, getSingleCamperApi} from '../../Api';


export const getCampersThunk = createAsyncThunk(
    'campers/getAllCampers', async (_, { rejectWithValue }) => {
        try {
            return await getAllCampersApi()
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const getSingleCamperThunk = createAsyncThunk(
    'campers/getSingleCamper', async (id, { rejectWithValue }) => {
        try {
            return await getSingleCamperApi(id)
        } catch (error) {
            return rejectWithValue(error.response.data)  
        }
 }   
)
