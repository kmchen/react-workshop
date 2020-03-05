import React from 'react'
import ReactDOM from 'react-dom'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Heading from 'YesterTech/Heading'
import 'YesterTech/StarRatings.scss'
import './styles/center-lesson.scss'

const products = [
 { id: 1, name: 'Mario Kart', rating: 5, brand: 'Nintendo', condition: 'new' },
 { id: 2, name: 'Donkey Kong', rating: 3.5, brand: 'Nintendo', condition: 'good' },
 { id: 3, name: 'Nintendo NES', rating: 4, brand: 'Nintendo', condition: 'fair' },
]

function BrowseProducts() {
return <div>helloworld</div>
}

BrowseProducts.title = '01';

export {BrowseProducts as default}