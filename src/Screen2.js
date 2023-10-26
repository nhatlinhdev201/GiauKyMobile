import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { todos } from './todos';

const Screen2 = ({ navigation, route }) => {

    const [search, setSearch] = useState('')
    const [jobs, setJobs] = useState(todos)

    const { userName, updatedJob, newJob } = route.params;

    // Xử lý thông tin công việc sau khi quay lại từ Screen3
    useEffect(() => {
        if (updatedJob) {
            // Cập nhật công việc đã được chỉnh sửa
            const updatedJobs = jobs.map((job) =>
                job.id === updatedJob.id ? updatedJob : job
            );
            setJobs(updatedJobs);
        } else if (newJob) {
            // Thêm công việc mới
            setJobs([...jobs, newJob]);
        }
    }, [updatedJob, newJob, jobs]);


    // Tùy chỉnh headerRight để hiển thị tên người dùng
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ marginRight: 10 }}>
                    <Text>{userName}</Text>
                </View>
            ),
        });
    }, [userName, navigation]);

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: 'white'
            }}
        >
            <View
                style={{
                    width: '90%',
                    borderWidth: 1,
                    borderColor: 'gray',
                    flexDirection: 'row',
                    padding: 10,
                    borderRadius: 8,
                    marginTop: 20,
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
                    placeholder='Search'
                    placeholderTextColor={'gray'}
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    style={{

                    }}
                />
            </View>
            <FlatList
                data={jobs}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'lightgray',
                            width: 350,
                            justifyContent: 'space-around',
                            padding: 10,
                            borderRadius: 10,
                            alignItems: 'center',
                            margin: 10
                        }}
                    >
                        <Pressable
                            style={{
                                width: 20,
                                height: 20,
                                resizeMode: 'contain',
                                borderWidth: 1,
                                borderColor: 'green',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View>
                                {item.state ? <Text style={{ fontSize: 17, color: 'green', fontWeight: 700 }}>✓</Text> : null}
                            </View>
                        </Pressable>
                        <Text
                            style={{
                                width: '85%',
                                paddingLeft: 10,
                                fontSize: 18,
                                fontWeight: 700
                            }}
                        >
                            {item.job}
                        </Text>
                        <Pressable
                            onPress={() => navigation.navigate('Screen3', {
                                selectedJob : item
                            })}
                        >
                            <Image
                                source={require('../assets/pencil.jpg')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    resizeMode: 'contain'
                                }}
                            />
                        </Pressable>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <Pressable
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'blue',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30
                }}
                onPress={() => {
                    navigation.navigate('Screen3', {selectedJob : null})
                }}
            >
                <Text
                    style={{ 
                        fontSize: 30,
                        fontWeight: 700,
                        color: 'white',
                        lineHeight: 50
                    }}
                >
                    +
                </Text>
            </Pressable>
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({})