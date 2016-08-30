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
      ],
      turn: [],
    }
  }

  addIdToTurn(card) {
    let newCards = cards.map((eachcard) => {
      if (eachcard.id == card.id) {
        return {
          id: card.id,
          pair: pair
          visible: 
        }
      }
      return player;
    })
  }

  firstClick(card) {
    console.log(card.id)

  }

  renderCard(card) {
    return (
      <div onClick={this.firstClick.bind(card)} style={{ width: '100px', height: '100px', 'background-color': '#ccc', float: 'left', margin: "4px"}} >
      {card.id}
      </div>
    )
  }



  render () {
    return (
      <div>
      <h1>Memory Game</h1>

        <div style = {{ width: '216px' }}>
          {this.state.cards.map(this.renderCard.bind(this))}
        </div>

      </div>
    );
  }

}

export default Board;
