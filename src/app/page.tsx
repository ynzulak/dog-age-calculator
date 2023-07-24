import './styles/main.scss'


function Home() {
  return (

<div className='main-container'>
  <div className='calculator-container'>
    <div className='title'>
      <h1>Dog age calculator</h1>
      </div>
    <div className='dog-size-container'>
      <div className='dog-size-title'><h4>Dog size</h4></div>
      <div className='dog-sizes'>
        <div className='dog-size'>
        <img src='./images/miniature.png' alt="" />
        {/* tutaj skonczylem */}
        </div>
        <div className='dog-size'>2</div>
        <div className='dog-size'>3</div>
        <div className='dog-size'>4</div>
        <div className='dog-size'>5</div>
      </div>
    </div>
    <div className='dog-age-container'>
      <div className='dog-age-title'><h4>Dog age</h4></div>
      <div className='dog-age-form'>
        <input type='number' min='0' max='20' placeholder='0'></input>
      </div>
      <div className='check-btn'>
        <button className='check'>Check</button>
      </div>
    </div>
  </div>
  <div className='calculator-result'>
    <div className='age-result-container'>
      <div className='age-result-title'><h4>Result</h4></div>
      <div className='dog-size-result'>
        <div className='dog-result-img'>img</div>
        <div className='result-description'>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home;