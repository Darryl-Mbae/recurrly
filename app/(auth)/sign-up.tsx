import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const signUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Link href="/(auth)/sign-in">Go to sign in</Link>
    </View>
  )
}

export default signUp