import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{
          display : 'flex',
          background : 'black',
          color : 'whitesmoke',
          padding: '1.5',
      }}>
          <h2>Movies App</h2>
          <h3 style={{
              marginLeft: '2rem',
              marginTop: '.25rem'
          }}>Favourites</h3>
      </div>
    )
  }
}
