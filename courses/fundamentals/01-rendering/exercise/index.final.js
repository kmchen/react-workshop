import React from 'react'
import ReactDOM from 'react-dom'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Heading from 'YesterTech/Heading'
import StarRatings from './StarRatings'
import './styles/center-lesson.scss'

const products = [
  { id: 1, name: 'Mario Kart', rating: 5, brand: 'Nintendo', condition: 'new' },
  { id: 2, name: 'Donkey Kong', rating: 3.5, brand: 'Nintendo', condition: 'good' },
  { id: 3, name: 'Nintendo NES', rating: 4, brand: 'Nintendo', condition: 'fair' },
]

function BrowseProducts() {
  return (
    <div>
      {products.map(product => (
        <div key={`product-${product.id}`}>
          <Heading>{product.name}</Heading>
          <StarRatings rating={product.rating} />
          <div className="text-small">
            <div>Brand: {product.brand}</div>
            <div>Condition: {product.condition}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ReactDOM.render(<BrowseProducts />, document.getElementById('root'))
BrowseProducts.title = '01-rendering';

export {BrowseProducts as default}
