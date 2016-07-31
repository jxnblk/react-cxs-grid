
import React from 'react'
import { Base } from 'react-cxs-hoc'
import Grid from '../src/Grid'
import html from '../README.md'

const cx = {
  marginTop: 64,
  marginBottom: 64,
  code: {
    fontFamily: 'Menlo, monospace',
    fontSize: 14
  },
  pre: {
    fontFamily: 'Menlo, monospace',
    fontSize: 14,
    padding: 8,
    backgroundColor: '#f3f3f3'
  },
  table: {
    width: '100%',
    marginBottom: 48,
    borderSpacing: 0,
    borderCollapse: 'separate'
  },
  th: {
    textAlign: 'left',
    verticalAlign: 'bottom',
    borderBottom: '1px solid'
  },
  td: {
    lineHeight: 1.25,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    verticalAlign: 'baseline',
    borderBottom: '1px solid rgba(0, 0, 0, .125)'
  }
}

const Readme = () => {
  return (
    <Grid px={3} md={8} lg={6}>
      <Base className={cx}
        dangerouslySetInnerHTML={{ __html: html }} />
    </Grid>
  )
}

export default Readme

