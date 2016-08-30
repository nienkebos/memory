import React from 'react'

class Board extends React.Component {

  constructor (){
    super()

    this.state = {
      card: [
        {id: 1, pair: 1, visible: false, completed: true },
        {id: 2, pair: 1, visible: false, completed: true },
        {id: 3, pair: 2, visible: false, completed: true },
        {id: 4, pair: 2, visible: false, completed: true },
      ]
    }
  }

  render () {
    return (
      <div>
      <h1>Memory Game</h1>

        <div>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </div>

      </div>
    );
  }

}

export default Board;
