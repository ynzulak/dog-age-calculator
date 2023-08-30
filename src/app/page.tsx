'use client';
import Image from 'next/image';
import DogAgeConverter from '../../components/pages/dogAgeConverter';
import DogResult from '../../components/pages/dogResult';
import dogsData from '../../components/dogsData';
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
					<DogAgeConverter dogsData={dogsData}/>
				</div>
			</div>
		</div>
	)
}

export default Home
