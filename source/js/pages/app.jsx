import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Flex } from 'reflexbox'

import Routes from './routes'
import Navigation from '../components/Navigation'

import '../../style/index.global.css'

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <Router>
        <Flex>
          <Navigation.Wrapper>
            <Navigation.Item to={'/'}>Home</Navigation.Item>
            <Navigation.Item to={'/counter'}>Redux Counter</Navigation.Item>
            <Navigation.Item to={'/neko'}>Neko</Navigation.Item>
            <Navigation.Item to={'/about'}>About</Navigation.Item>
          </Navigation.Wrapper>
          <Routes />
        </Flex>
      </Router>
    </Provider>
  )
}

export default Root
