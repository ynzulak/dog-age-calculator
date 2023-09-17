import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import dogsData from "../dogsData";

import Image from "next/image";

import resetButton from "../resetButton";
import dogWeightIndex from "../calculations/dogWeightIndex"; 
import convertToHumanYears from "../calculations/convertToHumanYears";
import { CSSTransition } from 'react-transition-group';

function DogAgeConverter() {
  const [dogYears, setDogYears] = useState(0);
  const [dogMonths, setDogMonths] = useState(0);
  const [humanYears, setHumanYears] = useState(0);
  const [dogWeight, setDogWeight] = useState(0);
  const [isToggled, setIsToggled] = useState(-1);
  const [selectedElement, setSelectedElement] = useState<any>(null);
  const [ageStage, setAgeStage] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');



  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    setIsClicked(true);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
        return(
        <>
        	<div className='dog-size-container'>
              <div className='dog-size-title'>
                <h3>Dog size</h3>
              </div>
            <div className='dog-sizes'>
              {dogsData.map((element, idx) => (
                 <div
                  key={idx}
                  onClick={() => {
                    dogWeightIndex(idx, setDogWeight, setIsToggled, setSelectedElement, setErrorMessage);
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
                          convertToHumanYears(dogYears, dogMonths, setHumanYears, dogWeight, setAgeStage, setErrorMessage);
                          handleClick()
                  }} className='check btn'>Check</button>
                </div>
            </div>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        
        {selectedElement && (
           <CSSTransition
           in={isClicked}
           timeout={1000} 
           classNames="fade"
         >
        <div className={isClicked ? 'calculator-result' : 'calculator-result hidden'}>
            <div className='age-result-container'>
              <div className='age-result-title'>
                <h3>Result</h3>
              </div>
              <div className='dog-size-result'>
                <div className='dog-result-img'>
                  <Image src={selectedElement.imagePath} alt={selectedElement.breed}  />
                </div>
                <div className='result-description'>
                  <p>Smaller dogs usually live longer than bigger races</p>
                  <p>Your dog have {dogYears > 0 ? dogYears + " years" : ''}
                  {dogYears && dogMonths > 0 ? " and " : ''}
                  {dogMonths > 0 ? dogMonths + " months" : ''}</p>
                  <p>So, if it would be human it would be {humanYears}</p>
                  <p>{ageStage}</p>							
                </div>
                <div className='reset-btn'>
                  <button className='reset btn' onClick={resetButton}>Reset</button>
                </div>
              </div>
            </div>
          </div>
          </CSSTransition>
          )}
            </>
    );

}

export default DogAgeConverter