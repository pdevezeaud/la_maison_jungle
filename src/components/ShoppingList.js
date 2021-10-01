import { plantList } from '../data/PlantList'
import '../styles/ShoppingList.css'

// const plantList = [
//     'monster',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]


function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item' >
						{plant.isBestSale ? <span>🔥</span> : null}
						{plant.name}
						{plant.isSpecialOffer && <div className='lmj-sales'>SOLDE</div> }
					</li>
				))}
			</ul>
		</div>
	)


	
}

export default ShoppingList


