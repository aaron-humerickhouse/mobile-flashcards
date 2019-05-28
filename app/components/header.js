import React from 'react'
import { connect } from 'react-redux';
import { Header, Left, Body, Title, Right } from 'native-base'

class MFHeader extends React.Component {
  render() {
    return(
      <Header>
        <Left/>
        <Body>
          <Title>{this.props.header}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}

function mapStateToProps({header}) {
  console.log('header: ', header.header)
  return {
    header: header.header || 'Mobile Flashcards'  //TODO: Figure out why it's nested

  }
}
export default connect(mapStateToProps)(MFHeader)
