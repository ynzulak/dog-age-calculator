import { useState } from "react";

import Image from "next/image";
import miniature from '../src/images/miniature.png'
import small from '../src/images/small.png'
import medium from '../src/images/medium.png'
import big from '../src/images/big.png'
import large from '../src/images/large.png'

function classToggle() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleClick = () => {
        setIsToggled(!isToggled);
      };

      const imagesData = [
        { id: 1, imagePath: {miniature}, title: 'Miniature', description: 'Up to 5kg', breed: 'Maltese'},
        { id: 2, imagePath: {small}, title: 'Small', description: '5kg - 12kg' ,breed: 'Jack Russell Terrier'},
        { id: 3, imagePath: {medium}, title: 'Medium', description: '12kg - 23kg', breed: 'Beagle'},
        { id: 4, imagePath: {big}, title: 'Big', description: '23kg - 45kg', breed: 'Golden Retriever'},
        { id: 5, imagePath: {large}, title: 'Large', description: 'From 45kg', breed: 'Tibetan Mastiff '},


      ];

      
      return (
        <div className='dog-sizes'>
          {imagesData.map((element) => (
            <div
              key={element.id}
              onClick={() => {handleToggleClick(element.id)
              console.log(element.imagePath);
              }}
              className={isToggled ? 'dog-selected dog-size btn' : 'dog-size btn'}>
              <span>{element.title}</span>
              <span>{element.description}</span>
              <Image src={element.imagePath} alt={element.breed}  />
            </div>
          ))}
        </div>
      );
}

export default classToggle