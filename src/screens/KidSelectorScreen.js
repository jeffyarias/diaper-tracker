import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

export default function KidSelectorScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/images/baby-background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <Text style={styles.title}>👶 Select a Kid</Text>
        <Text style={styles.text}>Coming soon...</Text>

        {/* Baby face animation under text */}
        <LottieView
          source={require('../../assets/animations/baby-face.json')}
          autoPlay
          loop
          style={styles.babyFace}
        />

        {/* Temporary button to go to Diaper Log */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Diaper Log')}
        >
          <Text style={styles.buttonText}>Go to Diaper Log</Text>
        </TouchableOpacity>
      </SafeAreaView>

      {/* Rabbit animation near bottom center */}
      <View style={styles.bunnyWrapper}>
        <LottieView
          source={require('../../assets/animations/rabbit.json')}
          autoPlay
          loop
          style={styles.bunny}
        />
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  title: {
    fontFamily: 'Baloo2_700Bold',
    fontSize: 26,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  babyFace: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  bunnyWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bunny: {
    width: 130,
    height: 130,
  },
  button: {
    backgroundColor: '#80d4ff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
