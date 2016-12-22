import {createElement} from 'react'

module.exports = {
  mapElement: (f) => (component) => (props) => f(createElement(component, props)),
  mapProps: (f) => (component) => (props) => createElement(component, f(props)),
}
