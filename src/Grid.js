
import React from 'react'
import Cxs from 'react-cxs-hoc'

export { cxs as cxs } from 'react-cxs-hoc'

export const breakpoints = {
  sm: 'screen and (min-width:40em)',
  md: 'screen and (min-width:52em)',
  lg: 'screen and (min-width:64em)'
}

export const scale = [
  0,
  8,
  16,
  32,
  48,
  64,
  96
]

// <Grid x={1/2} /> // 50%
// <Grid x={1} /> // 100%
// <Grid x={6} /> // 50%
// <Grid x={12} /> // 100%

export const w = x => typeof x === 'number'
  ? x > 1
    ? `${x / 12 * 100}%`
    : `${x * 100}%`
  : null

export const p = i => typeof i === 'number' ? scale[i] : null

export const createGrid = (Comp) => {
  const Base = Cxs(Comp)

  class Grid extends React.Component {
    render () {
      const {
        x = 1,
        sm,
        md,
        lg,
        px,
        align = 'top',
        className = {},
        ...props
      } = this.props

      const smCx = sm ? {
        [`@media ${breakpoints.sm}`]: {
          width: w(sm)
        },
      } : {}

      const mdCx = md ? {
        [`@media ${breakpoints.md}`]: {
          width: w(md)
        },
      } : {}

      const lgCx = lg ? {
        [`@media ${breakpoints.lg}`]: {
          width: w(lg)
        },
      } : {}

      const cx = {
        boxSizing: 'border-box',
        display: 'inline-block',
        verticalAlign: align,
        width: w(x),
        paddingLeft: p(px),
        paddingRight: p(px),
        ...smCx,
        ...mdCx,
        ...lgCx,
        ...className
      }

      return (
        <Base {...props} className={cx} />
      )
    }
  }

  return Grid
}

const Grid = createGrid('div')

export default Grid

