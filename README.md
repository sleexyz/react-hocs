# react-profunctor

Minimum viable higher-order component utility library.

Use in conjunction with something like Rambda's [pipe](http://ramdajs.com/docs/#pipe) or Lodash's [flow](https://lodash.com/docs/4.17.2#flow). Or just use [recompose](https://github.com/acdlite/recompose) :)

<br/>

### API:

Let's notate a React Component with a Unicode fat arrow: `props ⇒ element`

<br/>

```js
// mapProps : (props₁ → props₂) → (props₂ ⇒ element) → (props₁ ⇒ element)
const mapProps = (f) => (component) => (props) => createElement(component, f(props));
```
Precomposes your component with a props transformation.


<br/>

```js
// mapElement : (element₁ → element₂) → (props ⇒ element₁) → (props ⇒ element₂)
const mapElement = (f) => (component) => (props) => f(createElement(component, props));
```
Postcomposes your component with an element transformation.

<br/>

### Food for thought: The React Component profunctor?
If you were a keen [Haskeller](https://hackage.haskell.org/package/profunctors-5.2/docs/Data-Profunctor.html),
you would've noticed that `mapProps` looks like an `lmap`, and `mapElement` looks like an `rmap`.
