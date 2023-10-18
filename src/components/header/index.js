/*************************
 * author   : Menjith P
 * Purpose  : Header component which renders its children component
 * 
 *******************/
import {useEffect, useRef, useState} from 'react'

export default function Header(props){
    const ref=useRef()
    const[state,setstate]=useState(0)

    useEffect(()=>{
        const header_content=ref.current.getBoundingClientRect()
        setstate(header_content.height+10)
    },[props])


    return <header >
        <section style={{borderBottom:"3px solid #e5e7eb"}} className='zindex-1000 bg-white position-fixed top-0 start-0 w-100' >
            <div className='p-5 responsive-header' ref={ref} >
            {props.children}
            </div>
        </section>
        <div style={{marginTop:state+"px" || "6rem"}}></div>
    </header>
}
