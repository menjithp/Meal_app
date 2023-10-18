/*************************
 * author   : Menjith P
 * Purpose  : Food app slice actions creators and reducer functions
 * 
 *******************/
import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  filtervalue: "",
  mealslist:[...Array(10).fill("")],
  filtered_meallist:[...Array(10).fill("")],
  ordersummary:null,
  error:{all:false,individual:false}
}

export const foodapp = createSlice({
  name: 'foodapp',
  initialState,
  reducers: {
    filtervalue: (state,action) => {
      state.filtervalue = action.payload
      state.filtered_meallist=state.mealslist.filter((item)=>item.strMeal.toLowerCase().trim().includes(action.payload.toLowerCase()))
    },
    mealslist:(state,action)=>{
      state.mealslist = action.payload
      if(!state.filtervalue)state.filtered_meallist=action.payload
      else state.filtered_meallist=action.payload.filter((item)=>item.strMeal.trim().toLowerCase().includes(state.filtervalue.toLowerCase()))
    },
    ordersummary:(state,action)=>{state.ordersummary=action.payload},
    errormealsfetch:(state,action)=>{state.error.all=action.payload},
    errormealfetch:(state,action)=>{state.error.individual=action.payload}
  },
})


export const { filtervalue,mealslist,ordersummary,errormealfetch,errormealsfetch } = foodapp.actions

export default foodapp.reducer
