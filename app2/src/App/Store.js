import { configureStore } from "@reduxjs/toolkit";
import  newsData  from "../Features/showSlice";

export const Store= configureStore({
reducer:{
app:newsData,
},

});

export default Store;