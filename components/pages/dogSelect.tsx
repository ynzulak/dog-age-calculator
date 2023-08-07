import { SetStateAction, useState } from "react";

import Image from "next/image";

function dogSelect() {
    const [isToggled, setIsToggled] = useState(0);

    const handleOnClick = (index: SetStateAction<number>) => {
        setIsToggled(index);
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