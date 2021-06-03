const Card=(props)=>{

    return(
    <div className="row my-4">
        {props.movies.map((item)=>(
            <div className="col-md-4 my-2" key={item.id}>
            <div className="card shadow-sm" >
                <img className="card-img-top" alt="images filtered" src={item.image} />
                <div className="card-body">
                        <h5 className="card-title">
                                {item.title}
                        </h5>
                        <p>
                       {item.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button onClick={()=>props.deleteMovie(item)} className="btn btn-outline-danger">Delete</button>
                            <h2>
                                <span className="badge bg-info">5.4 </span>
                            </h2>
                        </div>
                </div>
            </div>
        </div>
        ))}
    </div>
    )
}



export default Card


