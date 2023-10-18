/*************************
 * author   : Menjith P
 * Purpose  : Listing Meal Items
 * 
 *******************/

import React,{ useEffect,useCallback } from 'react';
import {useSelector,useDispatch} from 'react-redux'
//ant design imports
import { Col, Row,Input } from 'antd';
//redux imports
import {mealslist,filtervalue,errormealsfetch} from '../../store/reducer'
//components imports
import Mealcard from './mealCard';
import Header from '../header';
import Skeleton_Custom from './skeleton/mealCard';
//hooks import
import {useFetchAllMeal} from '../../hooks/meals'

export default function MealList(){
    const foodapp=useSelector((state)=>state.foodapp)
    const dispatch=useDispatch()
    const {state,error}=useFetchAllMeal()

    useEffect(()=>{
        if(error)dispatch(errormealsfetch(error))
        else if(state) dispatch(mealslist(state))
    },[state,error])

    const handler=useCallback((e)=>{
        dispatch(filtervalue(e.target.value))
    },[])

    if(error) return <p className="font-weight-100 letter-spacing-1 mx-auto fit-content mt-2 red-color">{foodapp.error.all}</p>

    return <section className="meal-list">
        <Header>
            <Input style={{ width: '20%',minWidth:"250px" }} placeholder="filter meals ..." onChange={handler} value={foodapp.filtervalue} />
        </Header>
        <Row gutter={[16,16]}>
        {
            foodapp.filtered_meallist.map((item,index)=><React.Fragment key={index}>
            <Col key={item.idMeal} xs={12} sm={12} md={8} lg={6} xl={6} >
            {item?<Mealcard data={item}/>: <Skeleton_Custom/>}
            </Col>
            </React.Fragment>
        )}
        </Row>
    </section>


}