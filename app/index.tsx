import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text, Layout } from '@ui-kitten/components'

export default function Index() {
  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp</Text>
      <Text style={styles.subtitle}>Your journey starts here!</Text>

      <Link href="/login" asChild>
        <Button style={{ marginBottom: 15 }} appearance="outline">
          Login
        </Button>
      </Link>

      <Link href="/register" asChild>
        <Button>Register</Button>
      </Link>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30
  },
  button: {
    marginBottom: 15
  },
  registerButton: {
    backgroundColor: '#28A745'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
