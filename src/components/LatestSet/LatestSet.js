import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import './LatestSet.scss'

export const LatestSet = ({ allCards }) => (
  <div className="latest-set">
    {allCards.latestSet.name}
    {' : '}
    {allCards.cardsNumber}
  </div>
)

LatestSet.propTypes = {
  allCards: PropTypes.object
}

const mapStateToProps = ({ allCards }) => ({ allCards })

export default connect(mapStateToProps)(LatestSet)
