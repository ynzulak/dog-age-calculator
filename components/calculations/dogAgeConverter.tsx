import { useState } from "react";

import dogsData from "../dogsData";

import Image from "next/image";

function DogAgeConverter() {
    const [dogWeight, setDogWeight] = useState(0);
    const [dogYears, setDogYears] = useState(0);
    const [dogMonths, setDogMonths] = useState(0);
    const [humanYears, setHumanYears] = useState(0);
    const [isToggled, setIsToggled] = useState(-1);
    
    const handleOnClick = (index: number) => {
        setIsToggled(index);
        console.log(index);
       
          if(index == 0){
            setDogWeight(4);
          }else if (index == 1) {
            setDogWeight(5);
          }else if (index == 2) {
            setDogWeight(6);
          }else if (index == 3) {
            setDogWeight(7);
          }else if (index == 4) {
            setDogWeight(8);
          }
          
      console.log(dogWeight);

      };
      



    const convertToHumanYears = () => {
        const totalDogYears = dogYears + (dogMonths / 12);
        let humanAge: number 

        if (totalDogYears <= 0.5) {
            humanAge = Math.round(totalDogYears * 20);
          } else if (totalDogYears <= 1){
            humanAge = Math.round(totalDogYears * 16);
        }else if (totalDogYears <= 2){
            humanAge = Math.round(totalDogYears * 12);
        }else {
            humanAge = Math.round(24 + ((totalDogYears - 3) * dogWeight));
        }
    
     

        setHumanYears(humanAge);
        console.log(dogWeight);
        console.log(humanYears);
        console.log(totalDogYears);
      };

      return(
        <>
         <div className='dog-sizes'>
          {dogsData.map((element, idx) => (
            <div
            key={element.id}
              onClick={() => {
                handleOnClick(idx)
              }}
              className={idx === isToggled ? 'dog-selected dog-size btn' : 'dog-size btn'}>
              <span>{element.title}</span>
              <span>{element.description}</span>
              <Image src={element.imagePath} alt={element.breed}  />
            </div>
          ))}
        </div>
        <div className='dog-age-container'>
						<div className='dog-age-title'>
							<h3>Dog age</h3>
						</div>
            <div className="dog-input-form">
            <div className='dog-age-form'>
                <input type='number' min='0' max='20' placeholder='0' value={dogYears} onChange={(e) => setDogYears(parseInt(e.target.value))}></input>
                <span>years</span>
            </div>


            <div className='dog-age-form'>
                <input type='number' min='0' max='11' placeholder='0' value={dogMonths} onChange={(e) => setDogMonths(parseInt(e.target.value))}></input>
                <span>months</span>
            </div>
        </div><div className='check-btn'>
                <button onClick={() => {
                    convertToHumanYears()
              }} className='check btn'>Check</button>
            </div>
        </div>
            </>
    );

}

export default DogAgeConverter