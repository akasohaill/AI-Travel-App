import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../constants/Colors'
import { useRouter } from 'expo-router'

export default function StartNewTripCard() {

  const router=useRouter();

  return (
    <View style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:20
    }}>
        <Ionicons name='location-sharp' size={30} color='black'/>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:25
      }}>No trips planned yet</Text>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:20,
        textAlign:'center',
        color:Colors.GRAY
      }}>Looks like it's time to plan a new travel experience! Get Started Below.</Text>
      <TouchableOpacity style={{
        padding:15,
        paddingHorizontal:30,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15
      }}
      onPress={()=>router.push('/create-trip/search_place')}
      >
        <Text style={{
          color:Colors.WHITE,
          fontFamily:'outfit-medium',
          fontSize:18
        }}>Start a new trip</Text>
      </TouchableOpacity>
    </View>
  )
}