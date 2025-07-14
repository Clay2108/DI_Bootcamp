function FavoriteActors(props){
    return(
        <div>
            <h1>These are my favorite actors</h1>
            <ul>
                {props.actors.map(actor => <li>{actor.name} aged {actor.age}</li>)}
            </ul>
            <hr></hr>
        </div>
    )
}
export default FavoriteActors   