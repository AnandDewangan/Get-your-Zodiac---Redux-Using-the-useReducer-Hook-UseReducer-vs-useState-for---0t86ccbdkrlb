//code here
import zodiacSlice from './slices/zodiacSlice';
const {configureStore} = require('@reduxjs/toolkit');

const store = configureStore({
    reducer:{
        tellZodiac: zodiacSlice
    }
})

export default store;