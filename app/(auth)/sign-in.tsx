import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const signIn = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Link href="/(auth)/sign-up">Go to sig up</Link>
    </View>
  )
}

export default signIn