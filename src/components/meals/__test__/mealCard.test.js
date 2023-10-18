import {render,screen} from '@testing-library/react'
import MealCard from '../mealCard'
import data from '../configData/TestData.json'
import {MemoryRouter} from 'react-router-dom'


describe("Meal Card component testing",()=>{
    test('Checking Meal Card component rendering data',()=>{
        render(<MemoryRouter><MealCard data={data}/></MemoryRouter>)
        const card_title=screen.getByText(data.strMeal)
        expect(card_title).toBeInTheDocument()
    })

})