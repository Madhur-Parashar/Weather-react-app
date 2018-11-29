import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="container text-center">
       <form onSubmit={this.props.getData}>
           <input type="text" name="city" placeholder="city" />
           <button>Submit</button>
       </form>
      </div>
    );
  }
}

export default Form;