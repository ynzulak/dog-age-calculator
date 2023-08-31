'use client';
import DogAgeConverter from '../../components/pages/dogAgeConverter';
import dogsData from '../../components/dogsData';
import './styles/main.scss'

function Home() {


	
	return (
		<div className='main-container'>
			<div className='calculator-container'>
				<div className='title'>
					<h1>Dog age calculator</h1>
				</div>
					<DogAgeConverter dogsData={dogsData}/>
			</div>
		</div>
	)
}

export default Home
