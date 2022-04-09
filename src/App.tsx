import {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import apiCalls from './apiCalls';

class App extends Component {
  state = {
    recipes: [],
    error: null
  }

  searchSubmit = (ingredient: string) => {
    apiCalls.searchRecipes(ingredient).then(data => this.setState({ recipes: data.hits }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Form searchSubmit={this.searchSubmit} />
        </main>
      </div>
    );
  }
  
}

export default App;
