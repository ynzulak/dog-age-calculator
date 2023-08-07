'use client';
import Image from 'next/image';
import DogSelect from '../../components/pages/dogSelect';
import DogAgeInput from '../../components/pages/dogAgeInput'

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
					<DogSelect />
					<div className='dog-age-container'>
						<div className='dog-age-title'>
							<h3>Dog age</h3>
						</div>
					<DogAgeInput />
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
							<Image src='' alt='Maltese'  />
						</div>
						<div className='result-description'>
							<p>Smaller dogs usually live longer than bigger races</p>
							<p>Your dog is: 10 years</p>
							<p>So, if it would be human it would be 52</p>
							<p>Your dog is an adult now!</p>							
						</div>
						<div className='reset-btn'>
							<button className='reset btn'>Reset</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
