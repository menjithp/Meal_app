import {render,screen} from '@testing-library/react'
import MealItem from '../mealItem'
import {MemoryRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../../store'
import TestData from '../configData/TestData.json'


describe("Meal Item component testing",()=>{
    test('Checking meal item component rendering',async()=>{

        jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
            return Promise.resolve({
              json: () => Promise.resolve({meals:[TestData]}),
              status:200
            })
          })


        render(<Provider store={store}><MemoryRouter><MealItem/></MemoryRouter></Provider>)
        const headertextnode=await screen.findByText(TestData.strMeal)
        expect(headertextnode).toBeInTheDocument()
        
    })

})