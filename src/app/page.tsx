import Image from 'next/image'
import miniature from '../images/miniature.jpg'
import small from '../images/small.jpg'
import medium from '../images/medium.jpg'
import big from '../images/big.jpg'
import large from '../images/large.jpg'

import './styles/main.scss'

function Home() {
	return (
		<div className='main-container'>
			<div className='calculator-container'>
				<div className='title'>
					<h1>Dog age calculator</h1>
				</div>
				<div className='dog-size-container'>
					<div className='dog-size-title'>
						<h3>Dog size</h3>
					</div>
					<div className='dog-sizes'>
						<div className='dog-size'>
							<span>Miniature</span>
							<span>Up to 5kg</span>
							<Image src={miniature} alt='Maltese' width={100} height={100} />
						</div>
						<div className='dog-size'>
							<span>Small</span>
							<span>5kg - 12kg</span>
							<Image src={small} alt='Maltese' width={100} />
						</div>
						<div className='dog-size'>
							<span>Medium</span>
							<span>12kg - 23kg</span>
							<Image src={medium} alt='Maltese' width={100} />
						</div>
						<div className='dog-size'>
							<span>Big</span>
							<span>23kg - 45kg</span>
							<Image src={big} alt='Maltese' width={100} />
						</div>
						<div className='dog-size'>
							<span>Large</span>
							<span>From 45kg</span>
							<Image src={large} alt='Maltese' width={100} />
						</div>
					</div>
					<div className='dog-age-container'>
						<div className='dog-age-title'>
							<h3>Dog age</h3>
						</div>
						<div className='dog-age-form'>
							<input type='number' min='1' max='20' placeholder='0'></input>
							<span>years</span>
						</div>
						<div className='dog-age-form'>
							<input type='number' min='0' max='11' placeholder='0'></input>
							<span>months</span>
						</div>
						<div className='check-btn'>
							<button className='check'>Check</button>
						</div>
				</div>
				</div>
			</div>
			<div className='calculator-result'>
				<div className='age-result-container'>
					<div className='age-result-title'>
						<h3>Result</h3>
					</div>
					<div className='dog-size-result'>
						<div className='dog-result-img'>
							<Image src={miniature} alt='Maltese' width={100} height={100} />
						</div>
						<div className='result-description'>
							<p>Smaller dogs usually live longer than bigger races</p>
							<p>Your dog is: 10 years</p>
							<p>So, if it would be human it would be 52</p>
							<p>Your dog is an adult now</p>							
						</div>
						<div className='reset-btn'>
							<button className='reset'>Reset</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
