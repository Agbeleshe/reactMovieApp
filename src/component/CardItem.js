import './card.css'


const CardItem = ({movie}) =>{
    return(
        <div className="movie">
                    <p>{movie.Year}</p>
                    <img className="img" src={ movie.Poster !== 'N/A' ? movie.Poster: 'https://vai.placeholder.com/400'} alt={movie.Title}></img>
                    <div className="buttom-part">
                        <span>{movie.Type}</span>
                        <h3>{movie.Title}</h3>
                    </div>
            </div>
    )
}

export default CardItem