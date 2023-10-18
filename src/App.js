/*************************
 * author   : Menjith P
 * Purpose  : Root Component of App.
 * 
 *******************/

//default imports
import {lazy,Suspense} from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
//styles import
import './App.css';
//lazy import component 
import MealList from './components/meals/mealList';
const MealItem=lazy(()=>import('./components/meals/mealItem'))
const OrderSummary=lazy(()=>import('./components/orderSummary'))


function App() {

  let suspense=<p className="bg-success font-weight-75 d-flex justify-content-center align-items-center">Loading....</p>
  return (
    <div className="App">
      
      <Suspense fallback={suspense}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MealList />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/:id" element={<MealItem />} />
        </Routes>
        </BrowserRouter>
        </Suspense>
    </div>
  );
}

export default App;
