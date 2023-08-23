import { SetStateAction } from "react";

const convertToHumanYears = (dogYears: number, dogMonths: number, setHumanYears: { (value: SetStateAction<number>): void; (arg0: number): void; }, dogWeight: number) => {
    const totalDogYears = dogYears + dogMonths / 12;
    let humanAge = 0;
  
    if (totalDogYears <= 0.5) {
      humanAge = Math.round(totalDogYears * 20);
    } else if (totalDogYears <= 1) {
      humanAge = Math.round(totalDogYears * 16);
    } else if (totalDogYears <= 2) {
      humanAge = Math.round(totalDogYears * 12);
    } else {
      humanAge = Math.round(24 + (totalDogYears - 3) * dogWeight);
    }
  
    setHumanYears(humanAge);
  };
  
  export default convertToHumanYears;