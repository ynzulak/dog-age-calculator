import { useState } from "react";

function DogAgeConverter(index: number) {
    const [dogYears, setDogYears] = useState(0);
    const [dogMonths, setDogMonths] = useState(0);
    const [humanYears, setHumanYears] = useState(0);

    const convertToHumanYears = () => {
        const totalDogYears = dogYears + (dogMonths / 12);
        let humanAge: number 

        if (totalDogYears <= 0.5) {
            humanAge = Math.round(totalDogYears * 20);
          } else if (totalDogYears > 0.5 || totalDogYears <= 1){
            humanAge = Math.round(totalDogYears * 16);
        }else if (totalDogYears < 1 || totalDogYears <= 2){
            humanAge = Math.round(totalDogYears * 12);
        }else {
            humanAge = Math.round(24 + (totalDogYears ({} * {dogSizeAge})));
        }

        setHumanYears(humanAge);
      };

}

export default DogAgeConverter