import {  Character } from "../types";
import { api } from "./api";

export async function getCharacters(): Promise<Character[]> {
    try {
        const response = await api.get<Character[]>('api/characters')

        return response.data
    } catch (error) {
        console.log(error);

        return [] 
    }
}
