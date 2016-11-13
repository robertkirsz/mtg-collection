import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

// TODO: Make it use props to determine whether it should be visible or not

const Spinner = () => (
  <div className="loading-screen">
    <span className="fa fa-circle-o-notch fa-spin fa-4x" />
  </div>
)

export const LoadingScreen = ({ fetchingCards }) => (
  fetchingCards ? <Spinner /> : null
)

LoadingScreen.propTypes = {
  fetchingCards: PropTypes.bool
}

const mapStateToProps = ({ allCards }) => ({ fetchingCards: allCards.fetching })

export default connect(mapStateToProps)(LoadingScreen)