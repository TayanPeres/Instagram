import * as React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Camera from '../assets/camera.png'
import Feed from './Feed'
import New from './New'
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator()

const CameraTitle = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.push('New')}>
      <Image source={Camera} />
    </TouchableOpacity>
  )
}

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed}
        options={{ title: 'Instagram', headerRight: props => <CameraTitle {...props} /> }}
      />
      <Stack.Screen name="New" component={New} />
    </Stack.Navigator>
  )
}

export default Routes