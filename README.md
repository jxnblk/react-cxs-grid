
# react-cxs-grid

React grid system built with [cxs](https://github.com/jxnblk/cxs)

```sh
npm i react-cxs-grid
```

- Grid layout based on `display: inline-block`
- Fully encapsulated CSS using cxs
- No external CSS dependencies
- Simple API that promotes composability

```jsx
// Example
import React from 'react'
import Grid from 'react-cxs-grid'

class App extends React.Component {
  render () {
    return (
      <div>
        <Grid sm={4} px={2}>
          Left Column
        </Grid>
        <Grid sm={8} px={2}>
          Right Column
        </Grid>
      </div>
    )
  }
}

export default App
```

## Props

prop    | type   | description
--------|--------|------------
`x`     | number | Either a number from 0–1 or 2–12 that represents a percentage width or number of columns in a 12-column grid
`sm`    | number | Width from the `sm` breakpoint and up
`md`    | number | Width from the `md` breakpoint and up
`lg`    | number | Width from the `lg` breakpoint and up
`px`    | number | Left and right padding as a number 0–6 representing a step on the spacing scale
`align` | string | Sets vertical-align, either `top`, `middle`, `bottom`, or `baseline`

MIT License
