import {render,screen} from '@testing-library/react'
import Header from './index'


describe("header component testing",()=>{
    test('Checking header component rendering props.children properly',()=>{
        render(<Header><p>hello i am tested</p></Header>)
        const p_element=screen.getByText(/hello i am tested/i)
        expect(p_element).toBeInTheDocument()
    })

})