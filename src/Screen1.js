import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Screen1 = ({route, navigation}) => {

    const [yourName, setYourName] = useState('');

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'white'
        }}>
            <Image
                source={require('../assets/note.png')}
                style={{
                    width: 300,
                    height: 350
                }}
            />
            <Text
                style={{
                    fontWeight: 800,
                    color: 'blue',
                    fontSize: 22,
                    width: 200,
                    lineHeight: 25,
                    textAlign: 'center',
                    margin: 20
                }}
            >
                MANAGE YOUR TASK
            </Text>
            <View
                style={{
                    flexDirection : 'row',
                    width : '80%',
                    height : 40,
                    borderWidth : 1,
                    borderColor : 'gray',
                    borderRadius : 8,
                    alignItems : 'center',
                    justifyContent : 'center'
                }}
            >
                <Image
                    source={require('../assets/email.png')}
                    style={{
                        width : 20,
                        height : 18,
                        resizeMode: 'contain',
                        marginRight : 5
                    }}
                />
                <TextInput
                    placeholder='Enter your name'
                    value={yourName}
                    onChangeText={text => setYourName(text)}
                    placeholderTextColor={'gray'}
                    style={{
                        width : "80%"
                    }}
                />
            </View>
            <Pressable
                style={{
                    backgroundColor: 'blue',
                    padding : 15,
                    width : '70%',
                    alignItems : 'center',
                    borderRadius : 8,
                    marginTop : 30
                }}
                onPress={() => {
                    if(yourName) navigation.navigate('Screen2', {
                        userName : yourName
                    })
                    else {
                        /* Alert.alert("Vui Long dien yourName !") */
                        alert("Vui Long dien yourName !")
                    }
                    console.log("get")
                }}
            >
                <Text style={{
                    color : 'white',
                    fontSize : 23,
                    fontWeight : 700,
                }}>
                    GET STATED →
                </Text>
            </Pressable>
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({})