import {render,screen} from '../../utils/test_utils'
import OrderSummary from './index'
import { MemoryRouter} from 'react-router-dom'

const initialState = {
    filtervalue: "",
    mealslist:[...Array(10).fill("")],
    filtered_meallist:[...Array(10).fill("")],
    ordersummary:{
        "email": "biohackering@gmail.com",
        "name": "MenjithP",
        "prefix": "+91",
        "phone": "08270709279",
        "suffix": "INR",
        "price": 10,
        "orders": 1,
        "totalprice": 10,
        "residence": [
            "India",
            "Tamil Nadu",
            "Chennai"
        ],
        "address": "Coimbatore",
        "pincode": "637202"
    },
    error:{all:false,individual:false}
  }

describe("Order Summary component testing",()=>{
    test('Checking Order Summary component rendering data',()=>{
       const{container} =render(<MemoryRouter><OrderSummary/></MemoryRouter>,{
            preloadedState: { foodapp: initialState }})
        const element=screen.getByText(initialState.ordersummary.email,{exact:true})
        expect(element).toBeInTheDocument();
})
})