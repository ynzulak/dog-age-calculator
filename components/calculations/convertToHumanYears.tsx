import { SetStateAction } from "react";

const convertToHumanYears = (dogYears: number, dogMonths: number, setHumanYears: { (value: SetStateAction<number>): void; (arg0: number): void; }, dogWeight: number, setAgeStage: { (value: SetStateAction<string>): void; (arg0: string): void; }) => {
    const totalDogYears = dogYears + dogMonths / 12;
    let humanAge = 0;
    let ageStagesString: string = ''

    if (totalDogYears <= 0.5) {
      humanAge = Math.round(totalDogYears * 20);
    } else if (totalDogYears <= 1) {
      humanAge = Math.round(totalDogYears * 16);
    } else if (totalDogYears <= 2) {
      humanAge = Math.round(totalDogYears * 12);
    } else {
      humanAge = Math.round(24 + (totalDogYears - 4) * dogWeight);
    }

    setHumanYears(humanAge);
  
   //Podzielic pliki

    if(humanAge <= 1) {
      ageStagesString = "Your dog is a baby!"
    } else if (humanAge <= 12){
      ageStagesString = "Your dog is a teen!"
    }
    setAgeStage(ageStagesString)
    
  };
  
  export default convertToHumanYears;