import React from 'react'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
])

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './pages/routes'

export default function App () {
    return (
    <NavigationContainer>
    <Routes />
    </NavigationContainer>
    )
    
}
  