import { useState } from "react";

import dogsData from "../dogsData";

function DogAgeConverter() {
    const [dogYears, setDogYears] = useState(0);
    const [dogMonths, setDogMonths] = useState(0);
    const [humanYears, setHumanYears] = useState(0);

    const convertToHumanYears = () => {
        const totalDogYears = dogYears + (dogMonths / 12);
        let humanAge: number 
        let dogWeight = 4;
 
        for (let index = 0; index < dogsData.length; index++) {
          console.log(`Element[${index}] - Waga psa: ${dogWeight}`);
          dogWeight += 1;
        }

        if (totalDogYears <= 0.5) {
            humanAge = Math.round(totalDogYears * 20);
          } else if (totalDogYears <= 1){
            humanAge = Math.round(totalDogYears * 16);
        }else if (totalDogYears <= 2){
            humanAge = Math.round(totalDogYears * 12);
        }else {
            humanAge = Math.round(24 + ((totalDogYears - 3) * 4));
        }
    
        
        setHumanYears(humanAge);

        console.log(humanYears);
        console.log(dogYears);
        console.log(totalDogYears);
      };

      return(
        <><div className="dog-input-form">
            <div className='dog-age-form'>
                <input type='number' min='0' max='20' placeholder='0' value={dogYears} onChange={(e) => setDogYears(parseInt(e.target.value))}></input>
                <span>years</span>
            </div>


            <div className='dog-age-form'>
                <input type='number' min='0' max='11' placeholder='0' value={dogMonths} onChange={(e) => setDogMonths(parseInt(e.target.value))}></input>
                <span>months</span>
            </div>
        </div><div className='check-btn'>
                <button onClick={convertToHumanYears} className='check btn'>Check</button>
            </div></>
    );

}

export default DogAgeConverter