import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import moment from '../moment-with-locales';

axios.defaults.withCredentials = true

moment.locale('id')

const initialState = {
    user: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}


export const LoginAdmin = createAsyncThunk("user/LoginAdmin", async(user, thunkAPI) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/loginadmin`, {
            name: user.name,
            password: user.password
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const FOSetStatus = createAsyncThunk("user/FoSetStatus", async(_, thunkAPI) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/fosetstatus`, {
            status: "Dijemput",
            update_at:  moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const CreateSales = createAsyncThunk("user/CreateSales", async(user, thunkAPI) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/createsales`, {
            username: user.name,
            name: user.name,
            telp: user.telp,
            value: user.value,
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const SendImage = createAsyncThunk("user/SendImage", async(user, thunkAPI) => {
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/upload-avatar`, {
            avatar: user.avatar,
        });
        //return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        builder.addCase(LoginAdmin.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(LoginAdmin.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginAdmin.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })  
    }
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;