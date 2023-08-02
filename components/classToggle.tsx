import { useState } from "react";

import Image from 'next/image'
import miniature from '../images/miniature.png'
import small from '../images/small.png'
import medium from '../images/medium.png'
import big from '../images/big.png'
import large from '../images/large.png'

function classToggle() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleClick = () => {
        setIsToggled(!isToggled);
        isToggled ? 'dog-selected' : ''
      };

      const imagesData = [
        { id: 1, imagePath: {miniature}, title: 'Miniature', description: 'Up to 5kg', breed: 'Maltese'},
        { id: 1, imagePath: {small}, title: 'Small', description: '5kg - 12kg' ,breed: 'Jack Russell Terrier'},
        { id: 1, imagePath: {medium}, title: 'Medium', description: '12kg - 23kg', breed: 'Beagle'},
        { id: 1, imagePath: {big}, title: 'Big', description: '23kg - 45kg', breed: 'Golden Retriever'},
        { id: 1, imagePath: {large}, title: 'Large', description: 'From 45kg', breed: 'Tibetan Mastiff '},


      ];

          <div className='dog-sizes'>
						<div onClick={handleToggleClick} className={isToggled ? 'dog-selected dog-size btn' : 'dog-size btn'}>
							<span>Miniature</span>
							<span>Up to 5kg</span>
							<Image src={miniature} alt='Maltese'  />
						</div>
          </div>
      
      return (
        <div>
          {imagesData.map((element) => (
            <div
              key={element.id}
              onClick={() => handleToggleClick(element.id)}
              className={isToggled === element.id ? 'clicked' : ''}
            >
              <span>{element.title}</span>
              <span>{element.description}</span>
              <Image src={small} alt='Maltese'  />
            </div>
          ))}
        </div>
      );
}

export default classToggle