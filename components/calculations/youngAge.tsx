import { useState } from "react";

import dogSelect from "../pages/dogSelect";

function DogAgeConverter() {
    const [dogYears, setDogYears] = useState(0);
    const [dogMonths, setDogMonths] = useState(0);
    const [humanYears, setHumanYears] = useState(0);

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
            humanAge = Math.round(24 + ((totalDogYears - 3) * 4));
        }
        let dogWeight = 4;
        for (let index = 0; index < imagesData.length; index++) {
          // Tutaj możesz wykonywać operacje na elemencie tablicy, używając index i dogWeight
          console.log(`Element[${index}] - Waga psa: ${dogWeight}`);
          
          // Inkrementuj wagę psa o 1 za każdym razem
          dogWeight += 1;
  
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
        </div><div onClick={convertToHumanYears} className='check-btn'>
                <button className='check btn'>Check</button>
            </div></>
    );

}

export default DogAgeConverter