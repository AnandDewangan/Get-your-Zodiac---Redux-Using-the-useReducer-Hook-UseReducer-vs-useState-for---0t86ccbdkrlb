import { createSlice } from "@reduxjs/toolkit";
 
 const zodiacSlice = createSlice({
   name: "zodiac",
   initialState: "",
   reducers: {
     getZodiacSign: (state, action) => {
       //{payload:{month:"January"}}
       const { month } = action.payload;
       switch (month) {
         case "january":
           return "Aquaris";
         case "february":
           return "Pisces";
         case "march":
           return "Aries";
         case "april":
           return "Taurus";
         case "may":
           return "Gemini";
         case "june":
           return "Cancer";
         case "july":
           return "Leo";
         case "august":
           return "Virgo";
         case "september":
           return "Libra";
         case "october":
           return "Scorpio";
         case "november":
           return "Sagattarius";
         case "december":
           return "Capricorn";
         default:
           return "";
       }
     },
   },
 });
 
 
 export const {getZodiacSign}=zodiacSlice.actions
 
 export default zodiacSlice.reducer