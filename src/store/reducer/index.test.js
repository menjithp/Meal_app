import foodapp_reducer,{ filtervalue,mealslist,ordersummary,errormealfetch,errormealsfetch,initialState } from './index'
import TestData from '../../components/meals/configData/TestData.json'

describe("Redux Reducer function testing",()=>{

    test('should return initial state if current state undefined and irrelevant reducer ',()=>{
        expect(foodapp_reducer(undefined, { type: undefined })).toEqual(initialState)
    })
    test('check filtervalue reducer ',()=>{
        let newinitialState={...initialState,mealslist:[TestData]}
       expect(foodapp_reducer(newinitialState, filtervalue("menjith"))).toEqual({...newinitialState,filtervalue:"menjith",filtered_meallist:[]})
    })
    test('check mealslist reducer ',()=>{
       expect(foodapp_reducer({...initialState,filtervalue:"menjith"}, mealslist([TestData]))).toEqual({...initialState,filtervalue:"menjith",mealslist:[TestData],filtered_meallist:[]})
    })
})