import { useState } from "react";

import dogsData from "../dogsData";

import Image from "next/image";

import handleOnClick from "../calculations/handleOnClick"; 
import convertToHumanYears from "../calculations/convertToHumanYears";
import DogResult from "./dogResult";

function DogAgeConverter() {
  const [dogYears, setDogYears] = useState(0);
  const [dogMonths, setDogMonths] = useState(0);
  const [humanYears, setHumanYears] = useState(0);
  const [dogWeight, setDogWeight] = useState(0);
  const [isToggled, setIsToggled] = useState(-1);
  console.log(dogWeight);
  console.log(humanYears);
  
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

        return(
        <>
         <div className='dog-sizes'>
          {dogsData.map((element, idx) => (
            <div
            key={element.id}
              onClick={() => {
                handleOnClick(idx, setDogWeight, setIsToggled);
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
                      convertToHumanYears(dogYearss, dogMonths, setHumanYears, dogWeight);
                      handleClick()
              }} className='check btn'>Check</button>
            </div>
        </div>
        <div className={isClicked ? 'calculator-result' : 'calculator-result hidden'}>
            <div className='age-result-container'>
              <div className='age-result-title'>
                <h3>Result</h3>
              </div>
              <div className='dog-size-result'>
                <div className='dog-result-img'>
                  {/* <Image src='' alt='Maltese'  /> */}
                </div>
                <div className='result-description'>
                  <p>Smaller dogs usually live longer than bigger races</p>
                  <p>Your dog is: 10 years</p>
                  <p>So, if it would be human it would be 52</p>
                  <p>Your dog is an adult now!</p>							
                </div>
                <div className='reset-btn'>
                  <button className='reset btn'>Reset</button>
                </div>
              </div>
            </div>
          </div>
            </>
    );

}

export default DogAgeConverter