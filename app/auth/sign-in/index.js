import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Configs/FirebaseConfig';


export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const singInUser = () => {
    if(!email&&!password){
      ToastAndroid.show('Please enter the details',ToastAndroid.LONG)
      return ;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        router.replace('/mytrip');
        // console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if(errorCode=='auth/invalid-credential'){
          ToastAndroid.show('Invalid Credentials',ToastAndroid.LONG)
        }
      });
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <View style={{
      padding: 25,
      paddingTop: 50,
      marginTop: 20,
      height: '100%',
      backgroundColor: Colors.WHITE
    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name='arrow-back' size={24} color={'black'} />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 30
      }}>Let's Sign You In</Text>
      <Text style={{
        fontFamily: 'outfit',
        fontSize: 30,
        color: Colors.GRAY,
        marginTop: 20
      }}>Welcome Back</Text>
      <Text style={{
        fontFamily: 'outfit',
        fontSize: 30,
        color: Colors.GRAY,
        marginTop: 10,
      }}>You've been missed</Text>

      <View style={{ marginTop: 50 }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Email'
          onChangeText={(value)=>setEmail(value)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder='Enter Password'
          onChangeText={(value)=>setPassword(value)}
        />
      </View>

      {/* sign in button */}
      <TouchableOpacity onPress={singInUser} style={{
        marginTop: 50,
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderWidth: 1,
        borderRadius: 15
      }}>
        <Text style={{
          fontFamily: 'outfit',
          color: Colors.WHITE,
          textAlign: 'center',
          fontSize: 17
        }}>Sign In</Text>
      </TouchableOpacity>

      {/* sign Up button */}
      <TouchableOpacity
        onPress={() => router.push('auth/sign-up')}
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderWidth: 1,
          borderRadius: 15
        }}>
        <Text style={{
          fontFamily: 'outfit',
          color: Colors.BLACK,
          textAlign: 'center',
          fontSize: 17
        }}>Create Account</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    fontFamily: 'outfit',
    borderRadius: 15,
    borderColor: Colors.GRAY
  }
})