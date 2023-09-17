import { SetStateAction } from "react";
import dogsData from "../dogsData";

const handleOnClick = (index:number , setDogWeight: { (value: SetStateAction<number>): void; (arg0: number): void; }, setIsToggled: { (value: SetStateAction<number>): void; (arg0: number): void; }, setSelectedElement: ((arg0: any) => void), setErrorMessage) => {
  
  const clickedElement = dogsData[index];
  let dogWeight = 0;

  if(dogWeight) {
    setErrorMessage('Brak danych');
    setSelectedElement(null)
  }

    setSelectedElement(clickedElement);
    setIsToggled(index);
    
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