import Card from '../components/CardComponent'

export default function HomePage() {
	return (
		<div className='container pt-3 mt-3'>
			<div className='row'>
				<div className='col-md-6 pt-4'>
					<Card />
				</div>
				<div className='col-md-6 pt-4'>
					<Card />
				</div>
				<div className='col-md-6 pt-4'>
					<Card />
				</div>
				<div className='col-md-6 pt-4'>
					<Card />
				</div>
			</div>
		</div>
	)
}
