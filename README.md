# react-hocs

Tiny higher-order component utility library.

Use in conjunction with something like Rambda's [pipe](http://ramdajs.com/docs/#pipe) or Lodash's [flow](https://lodash.com/docs/4.17.2#flow).

<br/>

**UPDATE**: didn't know [recompose](https://github.com/acdlite/recompose) was a thing :)

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

### Food for thought: The Component profunctor?
If you were a keen [Haskeller](https://hackage.haskell.org/package/profunctors-5.2/docs/Data-Profunctor.html),
you would've noticed that `mapProps` looks like an `lmap`, and `mapElement` looks like an `rmap`
