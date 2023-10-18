import { useEffect,useState } from "react";
const meal_id_api="https://www.themealdb.com/api/json/v1/1/lookup.php?i="
const all_meals_api="https://www.themealdb.com/api/json/v1/1/search.php?f=b"

export function useFetchAllMeal(){
    const [state,setState]=useState()
    const [error,setError]=useState(false)
    useEffect(()=>{
         fetch(all_meals_api).then(data=>{
            if(data.status!==200)throw new Error("Data Fetch Failed")
            else return data.json()
        }).then(data=>{
            if("meals" in data){
                if(data.meals.length===0)throw new Error("No Meal Data Found")
                else if(data.meals.length>10)setState(data.meals.slice(0,10))
                else setState(data.meals)
            }
            else throw new Error("No Meal Data Found")
        }).catch((e)=>{
            setError(e.message)
        })
    },[])
    return {state,error}
}

export function useFetchOneMeal(id){
    const [state,setState]=useState()
    const [error,setError]=useState(false)
    useEffect(()=>{
        fetch(meal_id_api+id).then(data=>{
            if(data.status!==200)throw new Error ("Data Fetch Failed")
            else return data.json()
        }).then(data=>{
            if("meals" in data){
                if(data.meals.length===1)setState(data.meals[0])
                else throw new Error("Meal Data not Found")
            }
            else throw new Error("Meal data not Found")
        }).catch((e)=>{
            setError(e.message)
        })
    },[])

return {state,error}

    
}