import React from 'react';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component'
import {Title} from './components/title/title.component'
import {CardList} from './components/card-list/card-list.component'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }
  //Tem que ser arrow function para dar bind no this.
  handleChange = e => { 
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()))

    /* render é rechamado a cada setState */
    /* setState({}) é assíncrono... */
    return (
      <div className="App">
        <Title title="Monsters Rolodex"/>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}


export default App;
