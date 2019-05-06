import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
    const {value, handleSubmit, handleChange} = this.props
    return (
<React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
          <h1 className="text-slanted text-capitilize">
            Find the best recipes with <strong className="text-danger">Food2Fork</strong>
          </h1>
          <form onSubmit={handleSubmit} className="mt-4">
            <label htmlFor="search" className="text-capitilize">
            type the desired recipes separated by comma
            </label>
            <div className="input-group">
            <input type="text" 
                     name="search"
                     value={value}
                     onChange={handleChange} 
                     placeholder="carrots, chicken, cabbage"
                     className="form-control" />
              <div className="input-group-append">
                <button type="submit" className="text-white input-group-text bg-primary">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</React.Fragment>
    )
  }
}
