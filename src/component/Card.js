import './card.css'

import CardItem from './CardItem'

const Card = ({movies}) =>{
    return(
        <div className="container2">
              {movies.map((movie)=>(
        <CardItem movie={movie}></CardItem>
      ))}
            
        </div>
    )
}

export default Card