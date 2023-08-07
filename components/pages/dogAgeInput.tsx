function dogAgeInput() {


    return(
        <><div className="dog-input-form">
            <div className='dog-age-form'>
                <input type='number' min='0' max='20' placeholder='0'></input>
                <span>years</span>
            </div>
            <div className='dog-age-form'>
                <input type='number' min='0' max='11' placeholder='0'></input>
                <span>months</span>
            </div>
        </div><div className='check-btn'>
                <button className='check btn'>Check</button>
            </div></>
    );
}

export default dogAgeInput