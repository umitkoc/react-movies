import React ,{Component} from 'react'
import Card from './components/card'
import Search from './components/search'

class App extends Component{

    state = {
        data:[
            {
                "id": 1,
                "title": "Avengers",
                "rate": 5.1,
                "description": " After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
                "image": "https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg"
            },
            {
                "id": 2,
                "title": "Flash",
                "rate": 4.3,
                "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe flash"
            ,
                "image": "https://neizledik.com/wp-content/uploads/2019/09/iron-man-izle.jpg"
            },
            {
                "id": 3,
                "title": "Wonder Woman",
                "rate": 4.3,
                "description": " After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe wonder woman",
                "image": "https://im.haberturk.com/2020/12/29/ver1611064057/2919373_1920x1080.jpg"
            }
            ,
            {
                "id": 4,
                "title": "Lord of the Rings",
                "rate": 4.3,
                "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe lord of the rings",
                "image": "https://i4.hurimg.com/i/hurriyet/75/750x422/600ad95f7152d817f4b4962b.jpg"
            },
            {
                "id": 5,
                "title": "Joker",
                "rate": 4,
                "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe joker",
                "image": "https://kulturflix.com/wp-content/uploads/2019/10/joker-2019-joaquin-phoenix-clown-makeup-movie-uhdpaper.com-8K-3.957-wp.thumbnail-1280x720.jpg"
            }
            ,
            {
                "id": 6,
                "title": "Batman",
                "rate": 3.3,
                "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe batman",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5IRjTnlStUW5RkbQw5tVv_KN8vtgmdnS9g&usqp=CAU"
            }
        ],
        query:""
    }

    deleteMovies=(m)=>{
        const result=this.state.data.filter(i=>i.id!==m.id)
        this.setState({
            data:result
        })
    }
    searchMovies=(q)=>{
        this.setState({query:q})
    }



    render() {
        let filtered=this.state.data.filter((item)=>{
            return item.description.toLowerCase().indexOf(this.state.query)!==-1
        })


        return (
            <div className="container">
                <Search searchMovie={this.searchMovies}/>
                <Card deleteMovie={this.deleteMovies} movies={filtered}/>
            </div>
        )
    }
}

export default App