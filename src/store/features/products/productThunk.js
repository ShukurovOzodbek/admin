import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { useDispatch } from "react-redux";


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const { data } = await axios.get("http://localhost:3001/products")

        console.log(data, 'thunk');


        return data
    }
)

export const postProducts = createAsyncThunk(
    "products/postProducts",

    async (obj) => {
        const { data } = await axios.post("http://localhost:3001/products", obj)

        return data
    }
)

export const deleteProducts = createAsyncThunk(
    "products/deleteProducts",

    async ({ id }) => {
        const { data } = await axios.delete(`http://localhost:3001/products/${id}`)
        return data
    }
)
