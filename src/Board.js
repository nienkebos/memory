import React from 'react'
import Card from './Card'


class Board extends React.Component {

  constructor (){
    super()

    this.state = {
      cards: [
        {cardId: 1, pair: 1, visible: false, completed: true },
        {cardId: 2, pair: 1, visible: false, completed: true },
        {cardId: 3, pair: 2, visible: false, completed: true },
        {cardId: 4, pair: 2, visible: false, completed: true },
      ],
      turn: [],
    }
  }

  emptyTurns() {
    this.setState({
      turn: []
    })
  }

  compareCards(turn) {
    if (turn[0] === turn[1]) {
      console.log("We have a winning pair")
    } else {
    console.log("Sorry, no pair")
  };
    this.emptyTurns();
  }

  onPickCard(pair) {
    this.state.turn.push(pair)
    console.log( this.state.turn )

    if (this.state.turn.length == 2) {
      this.compareCards(this.state.turn)
    }
  }

  renderCard(card, index) {
    return <Card
      key={index}
      cardId={ card.cardId }
      pair={ card.pair }
      visible={ card.visible }
      completed={ card.completed }
      onPick={ this.onPickCard.bind(this) }
      />;
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
