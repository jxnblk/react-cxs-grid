
import React from 'react'
import test from 'ava'
import { mount } from 'enzyme'
import TestUtils from 'react-addons-test-utils'
import jsdom from 'jsdom-global'
import Grid, { cxs, breakpoints, scale, w, p, createGrid } from '../src/Grid'

jsdom('<html></html>')

let wrapper

test('exports cxs', t => {
  t.is(typeof cxs, 'function')
})

test('exports breakpoints', t => {
  t.is(typeof breakpoints, 'object')
})

test('exports scale', t => {
  t.true(Array.isArray(scale))
})

test('exports w function', t => {
  t.is(typeof w, 'function')
})

test('exports p function', t => {
  t.is(typeof p, 'function')
})

test('exports createGrid', t => {
  t.is(typeof createGrid, 'function')
  t.is(typeof createGrid('div'), 'function')
})

test('w calculates widths', t => {
  t.is(w(12), '100%')
  t.is(w(9), '75%')
  t.is(w(6), '50%')
  t.is(w(3), '25%')
  t.is(w(1), '100%')
  t.is(w(1 / 2), '50%')
  t.is(w(1 / 4), '25%')
  t.is(w(1 / 8), '12.5%')
})

test('p returns scale values', t => {
  t.is(p(0), scale[0])
  t.is(p(1), scale[1])
  t.is(p(2), scale[2])
  t.is(p(3), scale[3])
  t.is(p(4), scale[4])
  t.is(p(5), scale[5])
  t.is(p(6), scale[6])
})

test('createGrid returns a component', t => {
  const Comp = createGrid('div')
  wrapper = mount(<Comp />)
  t.is(typeof wrapper.type(), 'function')
  t.true(TestUtils.isElement(<Comp />))
})

test('renders', t => {
  t.notThrows(() => {
    wrapper = mount(<Grid />)
  })
})

test('applies hashed classNames', t => {
  const { className } = wrapper.find('div').props()
  t.regex(className, /^cxs/)
})

test('adds styles', t=> {
  t.regex(cxs.css, /box-sizing:border-box/)
  t.regex(cxs.css, /display:inline-block/)
  t.regex(cxs.css, /vertical-align:top/)
  t.regex(cxs.css, /width:100%/)
})

test('adds responsive sm width styles', t => {
  wrapper = mount(<Grid sm={6} />)
  t.regex(cxs.css, /(min-width:40em)/)
  t.regex(cxs.css, /width:50%/)
})

test('adds responsive md width styles', t => {
  wrapper = mount(<Grid md={3} />)
  t.regex(cxs.css, /(min-width:52em)/)
  t.regex(cxs.css, /width:25%/)
})

test('adds responsive lg width styles', t => {
  wrapper = mount(<Grid lg={9} />)
  t.regex(cxs.css, /(min-width:64em)/)
  t.regex(cxs.css, /width:75%/)
})

test('supports fractional widths', t => {
  cxs.clearCache()
  wrapper = mount(<Grid x={1/2} sm={1/3} md={1/4} lg={1/8} />)
  t.regex(cxs.css, /(min-width:40em)/)
  t.regex(cxs.css, /(min-width:52em)/)
  t.regex(cxs.css, /(min-width:64em)/)
  t.regex(cxs.css, /width:50%/)
  t.regex(cxs.css, /width:33\./)
  t.regex(cxs.css, /width:25%/)
  t.regex(cxs.css, /width:12\.5%/)
})

test('changes vertical align', t => {
  wrapper = mount(<Grid align='middle' />)
  t.regex(cxs.css, /vertical-align:middle/)
})

test('adds padding', t => {
  wrapper = mount(<Grid px={2} />)
  t.regex(cxs.css, /padding-left:16px/)
  t.regex(cxs.css, /padding-right:16px/)
})

test('doesn’t pollute child props', t => {
  wrapper = mount(<Grid x={6} sm={4} md={3} lg={2} px={2} align='middle' />)
  const props = wrapper.find('div').props()
  t.falsy(props.x)
  t.falsy(props.sm)
  t.falsy(props.md)
  t.falsy(props.lg)
  t.falsy(props.px)
  t.falsy(props.align)
})
