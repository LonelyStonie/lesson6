import React, { Component } from 'react';
import taqProductList from './components/taqProductList';
import taqProductAdd from './components/taqProductAdd';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'truong anh quan', id: 9999, status:1 },
        { title: 'Garlic', id: 2, status:1 },
        { title: 'Apple', id: 3, status:1 },
        { title: 'samsung', id: 4, status:0 },
      ]
    }
  }
  taqHandleSubmit = (param)=>{
    console.log("App:",param);

    let (products) = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }

  render() {
    return (
      <div className='container border mt-5'>
          <h1> truong anh quan - render </h1>
          <hr/>
          <taqProductList renderProducts={this.state.products}/>
        <hr/>
        <taqProductAdd onSubmit = {this.taqHandleSubmit}/>
      </div>
    )
  }
}

export default App;
