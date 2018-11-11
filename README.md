# react-use-ref-effect
React Hook that combines [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref) and [`useEffect`](https://reactjs.org/docs/hooks-reference.html#useeffect) hooks.

## Why
When using imperative libraries in React, the common way of creating instances is to create instance in `useEffect` hook and assign it to ref, created by `useRef` hook:

```jsx
import { useRef, useEffect } from 'react';
import Class from './Class';

funtion Component() {
  const classRef = useRef(null);
  
  useEffect(() => {
    classRef.current = new Class();
  }, []);
  
  return null;
}
```

`useRefEffect` does the same with less code. See [Usage](#usage).

## Usage

```jsx
import useRefEffect from 'react-use-ref-effect';
import Class from './Class';

funtion Component() {
  const classRef = useRefEffect(() => new Class(), []);
  return null;
}
```

*equals*

```jsx
import { useRef, useEffect } from 'react';
import Class from './Class';

funtion Component() {
  const classRef = useRef(null);
  
  useEffect(() => {
    classRef.current = new Class();
  }, []);
  
  return null;
}
```

## API

```js
const ref = useRefEffect(fn, [inputs])
```

`useRefEffect` will invoke `fn` function in `useEffect` hook and return a mutable ref object whose `.current` property will contain the return value of `fn` after `useEffect` is done.
