import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome5';

const UpdateForm = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.initial}>
        <Text style={styles.title}>Update Subject</Text>
        <TouchableOpacity onPress={cross}>
            <Icon name={'times'} color={'red'} size={30} />
        </TouchableOpacity>
    </View>
    <View style={styles.addSubject}>
        <View>
            <Text style={styles.subjectName}>Subject Name :</Text>
        </View>
        <View>
            {/* <TextInput style={styles.inputs} value={inputData.data1} onChangeText={(text) => handleInputChange('name', text)} placeholder="Enter subject name" placeholderTextColor="white" /> */}
            {props.name}
        </View>
    </View>
    <View style={styles.addSubject}>
        <View>
            <Text style={styles.subjectName}>Present :</Text>
        </View>
        <View>
            <TextInput style={styles.inputs} value={props.inputData.data2} keyboardType='numeric' onChangeText={(text) => handleInputChange('present', parseFloat(text))} placeholder="0" placeholderTextColor="white" />
        </View>
    </View>
    <View style={styles.addSubject}>
        <View>
            <Text style={styles.subjectName}>Total Classes :</Text>
        </View>
        <View>
            <TextInput style={styles.inputs} value={props.inputData.data3} keyboardType='numeric' onChangeText={(text) => handleInputChange('total', parseFloat(text))} placeholder="0" placeholderTextColor="white" />
        </View>
    </View>
    <Button style={styles.bttn} onPress={props.handleButtonClickUpdate()}>Update</Button>
</View>
  )
}
const styles = StyleSheet.create({
    container: {
        top: 1,
        width: 350,
        height: 180,
        gap: 10,
        backgroundColor: "black",
        borderRadius: 10,
        zIndex: 5,
    },
    initial: {
        top: 10,
        flexDirection: 'row',
        paddingLeft: 10,
        gap: 200
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    subjectName: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 10,
    },
    addSubject: {
        top: 10,
        flexDirection: 'row',
        paddingLeft: 10,
        gap: 20,
    },
    inputs: {
        color: 'white',
        borderBottomColor: 'white'
    },
    bttn: {
        color: 'black',
        backgroundColor: 'red',
    }
});
export default UpdateForm;
