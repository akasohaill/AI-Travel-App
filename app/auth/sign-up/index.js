import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { auth } from './../../../Configs/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createUser = () => {
    if(!email&& !password && !fullName){
      ToastAndroid.show('Please Enter full details', ToastAndroid.LONG)
      return ;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        router.replace('/mytrip');
        // console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        height: '100%',
        backgroundColor: Colors.WHITE
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name='arrow-back' size={24} color={'black'} />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
          marginTop: 30
        }}>Create An Account</Text>

      <View style={{ marginTop: 50 }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Your Full Name'
          onChangeText={(value)=>setFullName(value)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
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

      {/* sign up button */}
      <TouchableOpacity onPress={createUser} style={{
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
        }}>Create Account</Text>
      </TouchableOpacity>

      {/* sign in button */}
      <TouchableOpacity
        onPress={() => router.push('auth/sign-in')}
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
        }}>Sign In</Text>
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