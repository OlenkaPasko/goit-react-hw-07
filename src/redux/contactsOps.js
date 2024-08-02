import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66ac6497f009b9d5c731e491.mockapi.io";

export const fetchContacts = createAsyncThunk("tasks", async ()=>{})