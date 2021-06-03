const Search=(props)=>{

    return(
    <form className="form-row my-2 shadow-sm" onSubmit={(e)=>e.preventDefault()}>
        <div className="col-md-12">
        <input onChange={(e)=>props.searchMovie(e.target.value)} type="text" className="form-control" placeholder="Search"/>
        </div>
    </form>
    )
}

export default Search