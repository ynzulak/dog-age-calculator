import { SetStateAction, useState } from "react";

import dogIndex from "../calculations/dogIndex";

import Image from "next/image";

function dogSelect() {
    const [isToggled, setIsToggled] = useState(0);

    const handleOnClick = (index: number) => {
        setIsToggled(index);
        dogIndex(index)
        console.log(index);
      };

      const imagesData = [
        { id: 1, imagePath: require('../../src/images/miniature.png'), title: 'Miniature', description: 'Up to 5kg', breed: 'Maltese'},
        { id: 2, imagePath: require('../../src/images/small.png'), title: 'Small', description: '5kg - 12kg' ,breed: 'Jack Russell Terrier'},
        { id: 3, imagePath: require('../../src/images/medium.png'), title: 'Medium', description: '12kg - 23kg', breed: 'Beagle'},
        { id: 4, imagePath: require('../../src/images/big.png'), title: 'Big', description: '23kg - 45kg', breed: 'Golden Retriever'},
        { id: 5, imagePath: require('../../src/images/large.png')
        , title: 'Large', description: 'From 45kg', breed: 'Tibetan Mastiff '},
      ];


      let dogWeight = 4;
      for (let index = 0; index < imagesData.length; index++) {
        // Tutaj możesz wykonywać operacje na elemencie tablicy, używając index i dogWeight
        console.log(`Element[${index}] - Waga psa: ${dogWeight}`);
        
        // Inkrementuj wagę psa o 1 za każdym razem
        dogWeight += 1;

      }
      
      return (
        <div className='dog-sizes'>
          {imagesData.map((element, idx) => (
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