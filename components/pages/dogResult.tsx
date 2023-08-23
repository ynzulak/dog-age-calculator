import { useState } from "react";

import DogAgeConverter from "./dogAgeConverter";
import convertToHumanYears from "../calculations/convertToHumanYears";

function DogResult() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (setIsClicked: (arg0: boolean) => void) => {
    setIsClicked(true);
  };


    return(
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
    );
}

export default DogResult