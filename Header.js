
import React from 'react'
import { Base } from 'react-cxs-hoc'
import Grid from '../src/Grid'

const cx = {
  root: {
    paddingTop: 64,
    marginBottom: 64
  },
  link: {
    color: 'inherit',
    fontWeight: 600,
  }
}

const Header = () => {
  return (
    <Base className={cx.root} tag='header'>
      <Grid px={3} sm={8} align='middle'>
        <h1>react-cxs-grid</h1>
      </Grid>
      <Grid px={3} sm={4} align='middle'>
        <Base tag='a'
          className={cx.link}
          href='https://github.com/jxnblk/react-cxs-grid'>
          GitHub
        </Base>
      </Grid>
    </Base>
  )
}

export default Header

