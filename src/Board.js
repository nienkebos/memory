import React from 'react'
import Card from './Card'


class Board extends React.Component {

  constructor (){
    super()

    this.state = {
      cards: [
        {id: 1, pair: 1, visible: false, completed: true },
        {id: 2, pair: 1, visible: false, completed: true },
        {id: 3, pair: 2, visible: false, completed: true },
        {id: 4, pair: 2, visible: false, completed: true },
      ]
    }
  }

  renderCard(card, index) {
    return <Card
    key={ index }
    id={ card.id }
  }



  render () {
    return (
      <div>
      <h1>Memory Game</h1>

        <div>
          {this.state.cards.map(this.renderCard.bind(this))}
        </div>

      </div>
    );
  }

}

export default Board;
