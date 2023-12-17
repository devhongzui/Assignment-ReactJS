import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { assetHelper } from "../helper.js";

async function getUser() {
    try {
        const success = await axios.get(assetHelper("api/user"));
        return success.data;
    } catch (error) {
        return null;
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState: { value: await getUser() },
});

export const userData = (state) => state.user.value;

export default userSlice.reducer;
