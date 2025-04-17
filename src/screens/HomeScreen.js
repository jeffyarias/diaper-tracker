import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LottieView from 'lottie-react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/images/baby-background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Baby animation for Home screen */}
        <LottieView
          source={require('../../assets/animations/baby-waving.json')} // ← your new Lottie
          autoPlay
          loop
          style={styles.animation}
        />

        <Text style={styles.title}>👶 Welcome to BabyCare</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Add Kid + Parent')}
        >
          <Text style={styles.buttonText}>➕ Add Kid + Parent Info</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Log Diapers')}
        >
          <Text style={styles.buttonText}>👶 Log Diapers</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // soft transparent overlay
  },
  animation: {
    width: 220,
    height: 220,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
  fontFamily: 'Baloo2_700Bold',
  fontSize: 24, // was 28
  marginBottom: 20,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center', // ⬅️ center the text!
  textShadowColor: 'rgba(0, 0, 0, 0.1)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 2,
  letterSpacing: 1,
  textTransform: 'uppercase',
},
animation: {
    width: 180,
    height: 180,
    marginTop: 50,  // just enough padding from the top
    marginBottom: 10,
  },
  

  button: {
    backgroundColor: '#80d4ff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
