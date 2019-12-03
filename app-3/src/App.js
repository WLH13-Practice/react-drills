import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      filtered: '',
      fruitList: ['blueberry', 'strawberry', 'mango', 'lemon', 'orange']
    }
  }

  handleChange(filteredFruit) {
    this.setState({ filtered: filteredFruit })
  }

  render(){
    let fruitsList = this.state.fruitList
      .filter((e, i) => {
        return e.includes(this.state.filtered)
      })
      .map((e, i) => {
      return <h2 key={i}>{e}</h2>
      })
    return(
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        {fruitsList}
      </div>
    )
  }
}
export default App;