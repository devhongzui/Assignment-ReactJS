import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

async function getUser() {
    try {
        const success = await axios.get("/api/user");
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
