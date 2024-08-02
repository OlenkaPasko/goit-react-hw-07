import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66ac6497f009b9d5c731e491.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message); 
    }
  
});

export const addContact = createAsyncThunk("contacts/addContact", async () => {
    
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async () => {
    
})