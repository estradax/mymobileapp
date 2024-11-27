import { Stack } from 'expo-router'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import { StatusBar, StatusBarProps, useColorScheme } from 'react-native'

export default function RootLayout() {
  const colorScheme = useColorScheme() ?? 'light'
  let statusBarProps: StatusBarProps = {
    backgroundColor: 'white',
    barStyle: 'dark-content'
  }
  if (colorScheme === 'dark') {
    statusBarProps = {
      backgroundColor: eva[colorScheme]['color-basic-800'] ?? 'red',
      barStyle: 'light-content'
    }
  }

  return (
    <ApplicationProvider {...eva} theme={eva[colorScheme]}>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
      <StatusBar {...statusBarProps} />
    </ApplicationProvider>
  )
}
