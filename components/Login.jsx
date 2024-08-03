import { View, Text, Image, StyleSheet, Touchable } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native';

export default function Login() {

    const router=useRouter();
    return (
        <View>
            <Image source={require('./../assets/images/login.webp')}
                style={{
                    width: '100%',
                    height: 520
                }} />
            <View style={styles.container}>
                <Text style={{
                    fontSize: 30,
                    fontFamily: 'outfit-bold',
                    textAlign: 'center',
                    marginTop:10
                }}> AI Travel Planner </Text>
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        textAlign: 'center',
                        color: Colors.GRAY,
                        marginTop:20,
                    }}>
                    Discover your next adventure effortlessly.
                    "Personalize itinaries at your fingertips. Travel smarter with AI driven insights."
                </Text>
                
                <TouchableOpacity style={styles.button}
                    onPress={()=>router.push('auth/sign-in')}
                >
                    <Text style={{
                        color:Colors.WHITE,
                        fontFamily:'outfit',
                        fontSize:17,
                        textAlign:'center'
                    }}>
                        Sign In with Google
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
        padding: 20
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius:99,
        marginTop:'20%'
    }
})