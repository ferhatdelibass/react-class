import React from 'react'
import Car from "./Car"


const Garege = () => {
    // const cars = ["Ford","BMW","Audi"]
    const cars2 = [
        {id:1,brand: "Ford"},
        {id:2, brand:"BMW"},
        {id:3,brand:"Audi"}
    ]
    return (
        <>
        <h1>Who lives in my garage ?</h1>
        {/* <ul>
            {
                cars.map((car,index) =>(
                    <Car key ={index} brand ={car}/>
                ))
            }
        </ul> */}
        {/* <ul>
            {
                cars2.map((car)=> (
                    <Car key={car.id} brand={car.brand}/>
                ))
            }
        </ul> */}
        
            {/* <ul>
                {
                    cars2.map((car) =>{
                        let saveCar = car;
                        let saveCarLogo = "lovely" + car.brand;
                        return <Car key ={car.id} brand ={saveCarLogo}/> 
                    })
                }

            </ul> */}
            <ul>
                {
                    cars2.map((car)=> {
                        letsaveCar = car;
                        let saveCarLogo = "lovely" + saveCar.brand;
                        return (
                            <>
                            <Car key ={car.id} bramd={saveCarLogo}/>
                            <Car key ={car.id + 1} bramd={saveCarLogo}/>
                            <Car key ={car.id + 2} bramd={saveCarLogo}/>
                            </>
                        )
                    })
                }
            </ul>
        
        </>
        
    )
}

export default Garage