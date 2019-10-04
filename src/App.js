import React from 'react';
import logo from './logo.svg';
import './App.css';
import Picture from "./gameplay.json";

class App extends React.Component {
  state = {
    pictures:Picture,
   score:0,
   alreadyclicked:[],

  }
  handleclick = (id) => {
    let picturearray=[...this.state.pictures]
   picturearray.sort(() => Math.random() - 0.5);
   this.setState({pictures:picturearray})
    console.log(picturearray);
    const clickedarray= this.state.alreadyclicked
    if (clickedarray.indexOf(id)==-1){
    clickedarray.push(id)
    this.setState({alreadyclicked:clickedarray,score:this.state.score+1})
    } else {
      this.setState({score:0,alreadyclicked:[]})
    }
   
 
   
  }



  render() {

  
            


    return  (

      <div className="App">
        <h1>Game Play</h1>
        <h2> Score: {this.state.score}</h2>
        <h2>Top score: 0</h2>
        <div class="container">
        <div class="row">
        {this.state.pictures.map(picture => (
          <div className="col-sm-4"> <img onClick={()=>this.handleclick(picture.id)}src= {picture.image}class="img-responsive" alt="images"/> </div>
        ))}
        </div>

        

    

         
        </div>
      </div>
    )

  };
}

export default App;
