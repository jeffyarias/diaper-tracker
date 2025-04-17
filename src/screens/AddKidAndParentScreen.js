import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import LottieView from 'lottie-react-native';

export default function AddKidAndParentScreen() {
  const [kidName, setKidName] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentCode, setParentCode] = useState('');

  const handleSave = () => {
    if (!kidName || !parentName || !parentEmail) {
      Alert.alert('Missing info', 'Please fill in all fields.');
      return;
    }

    const generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setParentCode(generatedCode);

    // 📩 Placeholder for sending code via email
    console.log(`Send code ${generatedCode} to ${parentEmail}`);

    Alert.alert(
      'Saved!',
      `Kid "${kidName}" linked to parent "${parentName}". Code: ${generatedCode}`
    );

    // Reset if needed
    setKidName('');
    setParentName('');
    setParentEmail('');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/baby-background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>➕ Add Kid & Parent</Text>

        <TextInput
          style={styles.input}
          placeholder="Kid's Name"
          value={kidName}
          onChangeText={setKidName}
        />

        <TextInput
          style={styles.input}
          placeholder="Parent's Name"
          value={parentName}
          onChangeText={setParentName}
        />

        <TextInput
          style={styles.input}
          placeholder="Parent's Email"
          value={parentEmail}
          onChangeText={setParentEmail}
          keyboardType="email-address"
        />

        {parentCode !== '' && (
          <Text style={styles.code}>Code: {parentCode}</Text>
        )}

        <View style={{ marginTop: 20 }}>
          <Button title="Save & Send Code" onPress={handleSave} color="#4CAF50" />
        </View>
      </View>

      {/* 🐪 Camel animation in bottom corner */}
      <View style={styles.camelWrapper}>
        <LottieView
          source={require('../../assets/animations/camel.json')}
          autoPlay
          loop
          style={styles.camel}
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
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  header: {
    fontFamily: 'Baloo2_700Bold',
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 12,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  code: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: '#444',
  },
  camelWrapper: {
    position: 'absolute',
    top: 60,           // adjust as needed
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  
  camel: {
    width: 100,
    height: 100,
  },
});
