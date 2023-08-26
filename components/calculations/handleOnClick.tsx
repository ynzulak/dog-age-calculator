import { SetStateAction } from "react";

const handleOnClick = (index:number , setDogWeight: { (value: SetStateAction<number>): void; (arg0: number): void; }, setIsToggled: { (value: SetStateAction<number>): void; (arg0: number): void; }) => {
    setIsToggled(index);
    let dogWeight = 0;
    if (index === 0) {
      dogWeight = 4;
    } else if (index === 1) {
      dogWeight = 5;
    } else if (index === 2) {
      dogWeight = 6;
    } else if (index === 3) {
      dogWeight = 7;
    } else if (index === 4) {
      dogWeight = 8;
    }
    setDogWeight(dogWeight);
  };
  
  export default handleOnClick;