import { SetStateAction } from "react";

const convertToHumanYears = (dogYears: number, dogMonths: number, setHumanYears: (value: SetStateAction<number>) => void, dogWeight: number, setAgeStage: (value: SetStateAction<string>) => void) => {


    const totalDogYears = dogYears + dogMonths / 12;
    let humanAge = 0;
    let ageStagesString = ""



    if (totalDogYears <= 0.5) {
      humanAge = Math.round(totalDogYears * 20);
    } else if (totalDogYears < 1) {
      humanAge = Math.round(totalDogYears * 18);
    } else if (totalDogYears < 2) {
      humanAge = Math.round(totalDogYears * 16);
    } else if (totalDogYears < 3) {
      humanAge = Math.round(totalDogYears * 12);
    } else {
      humanAge = Math.round(24 + (totalDogYears - 2) * dogWeight);
    } 

    setHumanYears(humanAge);
  
    if(humanAge <= 1 ) {
      ageStagesString = "Your dog is a baby!"
    } else if (humanAge <= 12){
      ageStagesString = "Your dog is a child!"
    } else if (humanAge <= 19 ){
      ageStagesString = "Your dog is a teen!"
    } else if (humanAge <= 70){
      ageStagesString = "Your dog is adult!"
    } else if (humanAge >= 71){
      ageStagesString = "Your dog is old!"
    }
    setAgeStage(ageStagesString)

  };
  
  export default convertToHumanYears;