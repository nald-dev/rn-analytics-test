import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import Analytics from '@react-native-firebase/analytics'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Home = ({ navigation }) => {
  return (
    <View
      style = {{
        alignItems: "center",
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Notification")}
        style = {{
          backgroundColor: 'lightgray',
          padding: 10,
          borderRadius: 10,
          width: 250,
          alignItems: 'center'
        }}
      >
        <Text
          style = {{
            fontSize: 28,
            fontWeight: 'bold'
          }}
        >
          Notification
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
        style = {{
          backgroundColor: 'lightgray',
          padding: 10,
          borderRadius: 10,
          width: 250,
          alignItems: 'center',
          marginTop: 20
        }}
      >
        <Text
          style = {{
            fontSize: 28,
            fontWeight: 'bold'
          }}
        >
          Details
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style = {{
          backgroundColor: 'lightgray',
          padding: 10,
          borderRadius: 10,
          width: 250,
          alignItems: 'center',
          marginTop: 20
        }}
      >
        <Text
          style = {{
            fontSize: 28,
            fontWeight: 'bold'
          }}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const Screen = ({ name, backgroundColor }) => {
  useEffect(() => {
    Analytics().logEvent('opened_screen', {
      name
    })
  },[])

  return (
    <View
      style = {{
        alignItems: 'center',
        backgroundColor,
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <Text
        style = {{
          color: 'black',
          fontSize: 32,
          fontWeight: 'bold'
        }}
      >
        {name}
      </Text>
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = 'Home'
          component={Home}
        />
        <Stack.Screen
          name = 'Notification'
          children={() => <Screen name="Notification" backgroundColor = "pink" />}
        />
        <Stack.Screen
          name = 'Details'
          children={() => <Screen name="Details" backgroundColor = "deepskyblue" />}
        />
        <Stack.Screen
          name = 'Profile'
          children={() => <Screen name="Profile" backgroundColor = "teal" />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App