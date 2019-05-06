import React, {Component} from 'react';
import './App.css';
import {recipes} from './tempList'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'


class App extends Component{
  state = {
    recipes: recipes,
    details_id: 35380,
    query: '&q=',
    error: '',
    search: '',
    pageIndex: 1,
    url: `https://www.food2fork.com/api/search?key=280df59c9f07d6919d568400081b972d`,
    baseUrl: `https://www.food2fork.com/api/search?key=280df59c9f07d6919d568400081b972d`
  }

  async getRecipes() {
    try{
    const data = await fetch(this.state.url)
    const jsonData = await data.json()
    
    if(jsonData.recipes.length === 0) {
      this.setState(() => {
        return{
          error: `Sorry, but your query didn't return any recipes`
        }
      })
    }
    else{
      this.setState(() => {
        return{
          recipes: jsonData.recipes
        }
      })
    }

  }catch(error) {
    console.log(error)
  }
}

componentDidMount() {
  this.getRecipes()
}

displayPage = (index) => {
  switch(index) {
    default:
    case 1: return (
      <RecipeList recipes={this.state.recipes}
      handleDetails={this.handleDetails}
      value={this.state.search}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      error={this.state.error}      
      />      
    )
    case 0: return(
      <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>
    )
  }
}

handleIndex = index => {
  this.setState({
    pageIndex: index
  })
}

handleDetails = (index, id) => {
  this.setState({
    pageIndex: index,
    details_id: id
  })
}

handleChange = (e) => {
  this.setState({
    search: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  const {baseUrl, query, search} = this.state

  this.setState(() => {
    return{
      url:`${baseUrl}${query}${search}`,
      search: ''
    }
  },() => {
    this.getRecipes()
  })
}

  render() {
 //   console.log(this.state.search)
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>    
      );
  }  
}

export default App;
