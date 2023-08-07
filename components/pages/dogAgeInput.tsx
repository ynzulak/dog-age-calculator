import { useState } from "react";

function dogAgeInput() {
    const [inputValueYears, setInputValueYears] = useState('');
    const [inputValueMonths, setInputValueMonths] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    
    const handleInputYears = (event) => {
        setInputValueYears(event.target.value);
        console.log(event.target.value);
      };
    const handleInputMonth = (event) => {
        setInputValueMonths(event.target.value);
        console.log(event.target.value);
      };

      const handleSubmit = () => {
        setSubmittedValue(inputValueYears + inputValueMonths);
        console.log(inputValueYears + inputValueMonths);
      };

    return(
        <><div className="dog-input-form">
            <div className='dog-age-form'>
                <input type='number' min='0' max='20' placeholder='0' value={inputValueYears} onChange={handleInputYears}></input>
                <span>years</span>
            </div>
            <div className='dog-age-form'>
                <input type='number' min='0' max='11' placeholder='0' value={inputValueMonths} onChange={handleInputMonth} ></input>
                <span>months</span>
            </div>
        </div><div onClick={handleSubmit} className='check-btn'>
                <button className='check btn'>Check</button>
            </div></>
    );
}

export default dogAgeInput