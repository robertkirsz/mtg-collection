import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Measure from 'react-measure'
import { saveHeaderHeight } from 'store/layout'
import { restoreMyCards } from 'store/myCards'
import { loadLocalStorage } from 'utils'
import { Header, SearchModule, LoadingScreen } from 'components'
import 'styles/core.scss'

export class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    headerHeight: PropTypes.number,
    saveHeaderHeight: PropTypes.func,
    restoreMyCards: PropTypes.func,
    allCards: PropTypes.object
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.allCards.cards.length && !this.props.allCards.cards.length) {
      const restoredCollection = loadLocalStorage(nextProps.allCards.cards)
      this.props.restoreMyCards(restoredCollection)
    }
  }

  render () {
    return (
      <div id="app">
        <LoadingScreen />
        <Measure
          onMeasure={({ height }) => {
            if (height !== this.props.headerHeight) this.props.saveHeaderHeight(height)
          }}
        >
          <div className="fixed-wrapper">
            <Header />
            <SearchModule />
          </div>
        </Measure>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = ({ layout, allCards }) => ({
  headerHeight: layout.headerHeight,
  allCards
})
const mapDispatchToProps = { saveHeaderHeight, restoreMyCards }

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
