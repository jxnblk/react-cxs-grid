
import React from 'react'
import Grid from '../src/Grid'
import Header from './Header'
import Readme from './Readme'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className='debug'>
          <Grid px={3} md={6}>md6</Grid>
          <Grid px={3} md={6}>md6</Grid>

          <Grid px={3} md={4}>md4</Grid>
          <Grid px={3} md={4}>md4</Grid>
          <Grid px={3} md={4}>md4</Grid>

          <Grid px={3} sm={6} md={3}>sm6 md3</Grid>
          <Grid px={3} sm={6} md={3}>sm6 md3</Grid>
          <Grid px={3} sm={6} md={3}>sm6 md3</Grid>
          <Grid px={3} sm={6} md={3}>sm6 md3</Grid>

          <Grid px={3} sm={6} md={3} lg={2}>sm6 md3 lg2</Grid>
          <Grid px={3} sm={6} md={3} lg={2}>sm6 md3 lg2</Grid>
          <Grid px={3} sm={6} md={3} lg={2}>sm6 md3 lg2</Grid>
          <Grid px={3} sm={6} md={3} lg={2}>sm6 md3 lg2</Grid>
          <Grid px={3} sm={6} md={3} lg={2}>sm6 md3 lg2</Grid>
          <Grid px={3} sm={6} md={3} lg={2}>sm6 md3 lg2</Grid>
        </div>
        <Readme />
      </div>
    )
  }
}

export default App

