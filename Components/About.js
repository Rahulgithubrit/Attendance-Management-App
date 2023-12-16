import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const About = (props) => {
    const navigation = useNavigation();
    const GoBackBtn = () => {
        navigation.goBack();
    }
    return (

        <View style={styles.container}>
            <View style={styles.MainHeader}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { GoBackBtn() }}>
                    <Icon name={'arrow-left'} color={'red'} size={30} />
                </TouchableOpacity>
                <Text style={styles.about}>About</Text>
            </View>
            <View style={styles.blackLine} ></View>
            </View>
            <ScrollView style={styles.scrollview}>
                <View>
                    <Text style={styles.texts}>

                        Welcome to [App Name] - Simplifying Attendance Management with Innovation{'\n'}{'\n'}

                        Hello, and thank you for visiting us! We're thrilled to introduce you to [App Name], a cutting-edge attendance management solution meticulously crafted by the brilliant mind of Rahul Gupta.{'\n'}{'\n'}

                        Our Story:-{'\n'}{'\n'}

                        At the heart of [App Name] is the passion for simplifying complex tasks. Rahul Gupta envisioned a seamless attendance management experience that transcends the conventional, and that vision is now a reality. With a background in [mention relevant experience], Rahul recognized the need for a user-friendly, efficient solution to address attendance tracking challenges.{'\n'}{'\n'}

                        The [App Name] Advantage:-{'\n'}{'\n'}

                        Built on React Native: Rahul's commitment to innovation led to the choice of React Native as the development framework. This decision ensures a smooth, responsive, and cross-platform experience for users, whether on iOS or Android.{'\n'}

                        User-Centric Design: [App Name] is not just a tool; it's an experience. The user interface is intuitively designed to be user-friendly, allowing seamless navigation for administrators, teachers, and students alike.{'\n'}

                        Precision and Accuracy: Accuracy is the cornerstone of attendance management. Rahul Gupta's app incorporates robust algorithms to ensure precise tracking, eliminating the margin for error that traditional methods may have.{'\n'}{'\n'}

                        Our Mission:-{'\n'}{'\n'}

                        We are on a mission to revolutionize attendance management by providing an unparalleled, hassle-free experience. [App Name] is not just an app; it's a commitment to efficiency, accuracy, and innovation.{'\n'}{'\n'}

                        Join Us in Transforming Attendance Management{'\n'}{'\n'}

                        We invite you to explore [App Name] and experience the future of attendance tracking. Join us on this journey as we redefine what's possible in attendance management.{'\n'}{'\n'}
                        Thank you for being a part of the [App Name] community.{'\n'}{'\n'}
                        Feel free to tailor this draft to match the specific features, goals, and values of Rahul Gupta's Attendance Management App.{'\n'}{'\n'}
                        <Text style={styles.name}>By:-  Rahul Gupta{'\n'}{'\n'}{'\n'}</Text>
                    </Text>
                </View>
            </ScrollView >
        </View>

    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    MainHeader: {
        flex:0.19,
        zIndex: 6
      },
    header: {
        left: 20,
        top: 70,
        flexDirection: 'row',
        gap: 120,
    },
    about: {
        color: 'red',
        fontSize: 25
    },
    blackLine: {
        position: 'absolute',
        top: 120,
        height: 10,
        width: '100%',
        backgroundColor: 'black',
    },
    scrollview: {
        flex: 1,
        backgroundColor: '#1E1E1E',
      },
    texts: {
        left: 10,
        width: '95%',
        color: 'red',
    },
    name: {
        fontSize: 20,
        padding: 50,
    }
})