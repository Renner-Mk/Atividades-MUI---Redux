import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../types";
import { getCharacters } from "../../services/characters";

const initialState: Character[] = []

export const fetchCharacters  = createAsyncThunk('characters', async () => {
    const result = await getCharacters()

    return result
})

const bruxosSlice = createSlice({
    name: 'bruxos',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchCharacters .fulfilled, (_, action) => {
            return action.payload
        })
        builder.addCase(fetchCharacters .rejected, () => {
            return []
          })
    }
    
})

export default bruxosSlice.reducer