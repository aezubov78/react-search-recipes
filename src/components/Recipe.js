import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
    const {image_url, title, source_url, publisher} = this.props.recipe    
    const {handleDetails} = this.props
    return (
        <React.Fragment>
          <div className="col-10 mx-auto col col-md-6 col-lg-4 my-3">
            <div className="card">
              <img src={image_url} className="img-card-top" 
              alt="recipe" style={{height:'14rem'}} />
              <div className="card-body text-capitilize">
                <h6>{title}</h6>
                <h6 className="text-success text-slanted">
                granted by {publisher}
                </h6>
              </div>
              <div className="card-footer">
                <button 
                   type='button'
                   onClick={handleDetails}
                   className='btn btn-primary text-capitalize'                
                >Composition</button>
                <a href={source_url} className="btn btn-success mx-2 text-capitilize" 
                target="_blank" rel="noopener noreferrer">
                  in Web
                </a>
              </div>
            </div>
          </div>



        </React.Fragment>
    )
  }
}
