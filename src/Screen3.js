import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { todos } from './todos'

const Screen3 = ({ navigation, route }) => {

    const { selectedJob } = route.params
    const isEditing = !!selectedJob; // Xác định xem có đang chỉnh sửa công việc hay thêm mới

    /* Xác định tiêu đề trang */
    const screenTitle = isEditing ? "Chỉnh sửa" : "Thêm mới"

    /* Xasc dinh noi dung trong textInput */
    const [jobTitle, setJobTitle] = useState(isEditing? selectedJob.job : "")

    const handleFinish = () => {
        if(isEditing) {
            /* Chinh sua */
            const updatedJob = {...selectedJob, 'job' : jobTitle}
            navigation.navigate('Screen2', { updatedJob})
        } else {
            /* them moi */
            const maxId = Math.max(...todos.map(todo => todo.id));
            const newJob = {
                'id' : maxId +1,
                'job' : jobTitle,
                'state' : false
            }
            navigation.navigate('Screen2', {newJob});
        }
    }
    return (
        <View
            style={{ 
                flex : 1,
                alignItems : 'center',
                backgroundColor : 'white'
            }} 
        >
            <Text
                style={{
                    fontSize : 25,
                    fontWeight : 700,
                    color : 'black',
                    marginTop : 40
                }}
            >
                ADD YOUR JOB
            </Text>
            <View
                style={{
                    width: '90%',
                    borderWidth: 1,
                    borderColor: 'gray',
                    flexDirection: 'row',
                    padding: 10,
                    borderRadius: 8,
                    marginTop: 40,
                    marginBottom: 20
                }}
            >
                <Image
                    source={require('../assets/search.png')}
                    style={{
                        width: 25,
                        height: 25,
                    }}
                />
                <TextInput
                    placeholder='add your job'
                    placeholderTextColor={'gray'}
                    value={jobTitle}
                    onChangeText={(text) => setJobTitle(text)}
                    style={{
                        width : '90%',
                        marginLeft : 10
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
                onPress={handleFinish}
            >
                <Text style={{
                    color : 'white',
                    fontSize : 23,
                    fontWeight : 700,
                }}>
                    Finish →
                </Text>
            </Pressable>
        </View> 
    )
}

export default Screen3

const styles = StyleSheet.create({})