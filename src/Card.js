import React from 'react'

class Card extends React.Component {
  pickFirstCard() {
    this.props.onPick(this.props)
  }

  render () {
    return (
      <div onClick={this.pickFirstCard.bind(this)} style={{ width: '100px', height: '100px', 'backgroundColor': '#ccc', float: 'left', margin: "4px"}}>
        {this.props.cardId}
      </div>
    );
  }
}

export default Card;

// onClick={this.onPickCard.bind(this)}
