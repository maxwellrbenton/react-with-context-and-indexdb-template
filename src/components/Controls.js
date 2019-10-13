import React from 'react'
import Consumer from '../configContext'

export default function Counter({ addButton }) {

  return (
    <Consumer>
      {context => {
        return (
          <button onClick={() => context.add()}>Add</button>
        )
      }}
      
    </Consumer>
  )
}