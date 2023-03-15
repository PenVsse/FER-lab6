import { createSlice } from "@reduxjs/toolkit";
import UsersData from '../ListOfUsesr';
export const userSlice = createSlice({
    name: "users",
    initialState: { value: UsersData },
    reducers: {
        addUser: (state, action) => {
            console.log('a', action)

            state.value.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },
        updateUsername: (state, action) => {
            console.log(state.value)
            console.log(action.payload) 

            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
            });

        }
    }
});

export default userSlice.reducer;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;
