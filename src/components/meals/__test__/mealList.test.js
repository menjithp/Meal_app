import {render,screen} from '@testing-library/react'
import MealList from '../mealList'
import {MemoryRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../../store'
import TestData from '../configData/TestData.json'


describe("Meal List component testing",()=>{
    test('Checking meal list component rendering',async()=>{

        jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
            return Promise.resolve({
              json: () => Promise.resolve({meals:[TestData]}),
              status:200
            })
          })


        render(<Provider store={store}><MemoryRouter><MealList/></MemoryRouter></Provider>)
        const card=await screen.findAllByTestId(TestData.strMeal)
        expect(card).toHaveLength(1)
        
    })

})