import { SetStateAction, useState } from "react";

import dogIndex from "../calculations/dogIndex";
import dogsData from "../dogsData";
import Image from "next/image";

function dogSelect() {
    const [isToggled, setIsToggled] = useState(0);

    const handleOnClick = (index: number) => {
        setIsToggled(index);
        dogIndex(index)
        console.log(index);
      };
      
      return (
        <div className='dog-sizes'>
          {dogsData.map((element, idx) => (
            <div
            key={element.id}
              onClick={() => {
                handleOnClick(idx)
              }}
              className={idx === isToggled ? 'dog-selected dog-size btn' : 'dog-size btn'}>
              <span>{element.title}</span>
              <span>{element.description}</span>
              <Image src={element.imagePath} alt={element.breed}  />
            </div>
          ))}
        </div>
      );
}


export default dogSelect