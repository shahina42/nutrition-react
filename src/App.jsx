import React, { Component } from 'react'
import FoodBox from './Component/FoodBox'
import FoodData from '../resources/FoodData'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", }
  }

  change_inp = (e) => {
    this.setState({

      value: e.target.value

    })
  }


  render() {
    let filterdata = FoodData.filter((item) => {
      return item.name.includes(this.state.value)
    })



    return (
      <>
        <div className='search'>Search</div>
        <input
          type='text'
          className='searchbar'
          value={this.state.value}
          placeholder=' Search by item'
          onChange={(e) => this.change_inp(e)}
        />

        {filterdata.length !== 0 ? (
          <div>
            {filterdata.map((item) => (
              <FoodBox key={item.id} food={item} />
            ))}
          </div>
        ) : (
          <h1>No Result found
          </h1>
        )}
      </>
    );
  }
}



