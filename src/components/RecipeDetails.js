import React, { Component } from 'react'
import {recipe} from '../tempDetails'

export default class RecipeDetails extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       recipe: recipe,
//       url: `https://www.food2fork.com/api/get?key=b375ed5b9f6fc6ea302ef063e473282d&rId=${this.props.id}`
//     }
//   }

// async componentDidMount() {
//     try{
//     const data = await fetch(this.state.url)
//     const jsonData = await data.json()
//     this.setState({
//       recipe: jsonData.recipe
//     })
//   }catch(error) {
//     console.log(error)
//   }
// }

state = {
  recipe
}

async componentDidMount(){
  const id = this.props.id
  const url= `https://www.food2fork.com/api/get?key=280df59c9f07d6919d568400081b972d&rId=${id}`
  try{
        const data = await fetch(url)
        const jsonData = await data.json()
        this.setState((state, props) => {
          return{
            recipe:jsonData.recipe
          }
        },() => {})
      }catch(error) {
        console.log(error)
      }
}


  render() {
    const {image_url, publisher, publisher_url, source_url, title, ingredients} = this.state.recipe
      const {handleIndex} = this.props
      return (
   <React.Fragment>
     <div className="container">
       <div className="row">
         
         <div className="col-10 mx-auto col-md-6 my-3">
           <button 
           type="button" 
           onClick={() => {handleIndex(1)}}
           className="btn btn-info mb-5 text-capitilize">
             Back to cookbook
           </button>
           <img src={image_url} className="d-block w-100" alt="recipe" />
         </div>

         <div className="col-10 mx-auto col-md-6 my-3">
           <h6 className="text-uppercase">{title}</h6>
           <h6 className="text-warning text-capitilize text-slanted">
             granted by {publisher}
           </h6>
           
           <a href={publisher_url}
           target='_blank'
           rel="noopener noreferrer"
           className="btn btn-primary mt-2 text-capitilize"           
           >Publisher</a>

           <a href={source_url}
           target='_blank'
           rel="noopener noreferrer"
           className="btn btn-success mt-2 text-capitilize mx-3"           
           >Recipe link</a>

           <ul className="list-group mt-4">
             <h2 className="mt-3 mb-4">Composition</h2>
            { 
              ingredients.map((ingredient, index) => {
                return(
                  <li key={index} className='list-group-item text-slanted'>
                    {ingredient}
                  </li>
                )
              })
            }
           </ul>
         </div>
       </div>
     </div>     
   </React.Fragment>
    )
  }
}
