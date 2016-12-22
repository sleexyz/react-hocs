# react-hocs

Tiny higher-order component utility library.

Use in conjunction with something like Rambda's [pipe](http://ramdajs.com/docs/#pipe) or Lodash's [flow](https://lodash.com/docs/4.17.2#flow).

<br/>

### What is a higher-order component?

A higher order component is a function that
- takes a React Component
- returns a React Component

<br/>

### API:

Let's pretend that a React Component is just a function from `props` to `element`

<br/>

#### `mapProps : (props₁ → props₂) → (props₂ → element) → (props₁ → element)`
Precomposes your component with a props transformation.


<br/>

#### `mapElement : (element₁ → element₂) → (props → element₁) → (props → element₂)`
Postcomposes your component with an element transformation.

<br/>

### Food for thought: The Component profunctor...
If you were a keen [Haskeller](https://hackage.haskell.org/package/profunctors-5.2/docs/Data-Profunctor.html),
you would've noticed that `mapProps` looks like an `lmap`, and `mapElement` looks like an `rmap` ;)
