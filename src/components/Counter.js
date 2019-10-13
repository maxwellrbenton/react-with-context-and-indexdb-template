import React from 'react';
import Consumer from '../configContext';

export default function Counter() {
  return (
    <Consumer>
      {context => {
        return (
          <h3>{context.count}</h3>
        )
      }}
    </Consumer>
  )
}