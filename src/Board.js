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

    this.previousCard
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

  onPickCard(props) {
    if (this.state.turn.length == 0) {
      this.state.turn.push( props.pair )
      console.log("1st turn", this.state.turn )
      }
    else if (this.state.turn.length == 1 && this.previousCard !== props.cardId) {
      this.state.turn.push( props.pair )
      console.log("2nd turn", this.state.turn )
      }
    else {
      console.log("Error, you can not pick the same card!")
    }

    if (this.state.turn.length == 2) {
      this.compareCards(this.state.turn)
    }
    this.previousCard = props.cardId
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
