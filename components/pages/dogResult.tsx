import { useState } from "react";

import DogAgeConverter from "./dogAgeConverter";
import convertToHumanYears from "../calculations/convertToHumanYears";

function DogResult() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  //oddziel te pliki

    return(
      <>
  
      {selectedElement && (
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
                  <p>Your dog have {dogYears > 0 ? dogYears + " years" : ''} {dogMonths > 0 ? dogMonths + " months" : ''}</p>
                  <p>So, if it would be human it would be {humanYears}</p>
                  <p>{ageStage}</p>							
                </div>
                <div className='reset-btn'>
                  <button className='reset btn'>Reset</button>
                </div>
              </div>
            </div>
          </div>
          )}
          </>
    )
}

export default DogResult