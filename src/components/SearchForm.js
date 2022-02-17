import React from "react";
class SearchForm extends React.Component{

  state = {
    origin: '',
    destination: ''
  }

  handleOrigin = e => {
    this.setState({origin: e.target.value})
  }

  handleDestination = e => {
    this.setState({destination: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.origin}/${this.state.destination}`)
  }


  render(){
    return(
            <div class="container p-4"> 
              <div class="row">
                  <div class="col-md-12">
                      <h4>Search Flight</h4> 
                  </div>
              </div>
              <hr/>
              <div class="d-flex justify-content-center my-5"> 
                  <div class="card col-md-8">
                      <div class="card-header d-flex justify-content-between">
                          <div> <h5> We can't promise if we're going to land</h5></div>
                          
                      </div>
                      <div class="card-body">
                      <form onSubmit={this.handleSubmit}>
                        <label for="Origin" class="form-label">Origin</label>
                        <input type="text" class="form-control" id="exampleInputEmail1"  onChange={this.handleOrigin} aria-describedby="emailHelp" required/>
                        <label for="Destination" class="form-label">Destination</label>
                        <input type="text" class="form-control" id="exampleInputEmail1"  onChange={this.handleDestination} aria-describedby="emailHelp" required/>
                        <button class="btn btn-danger my-3" >Search</button>
                      </form>
                          </div>
                      </div>
              </div>
      </div>

      
    );
  } // render()
} // class SearchForm

export default SearchForm;