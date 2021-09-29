import { computeHeadingLevel } from "@testing-library/dom"

const plantList = [
    'monster',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]


function ShoppingList(){
    return (
        <ul>
        {plantList.map((plant,index) =>(
            <li key={`${plant}-${index}`}>{plant}</li>
        ))}

        </ul>
    )
}

export default ShoppingList