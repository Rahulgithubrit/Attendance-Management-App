import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback, TouchableHighlight, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react'
import Form from './Form';
import Card from './Card';
import Options from './Options';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = (props) => {
  const [popup, setPopup] = useState(false)
  const [options, setOptions] = useState(false);
  const [cards, setCards] = useState(true);
  const [dataArray, setDataArray] = useState([]);

  //   const initializeAsyncStorage = async () => {
  //     try {
  //         // Check if the array exists, if not, initialize it as an empty array
  //         const existingData = await AsyncStorage.getItem('@your_data_key');
  //         if (existingData === null) {
  //             await AsyncStorage.setItem('@your_data_key', JSON.stringify([]));
  //         }
  //     } catch (e) {
  //         console.error('Error initializing Async Storage:', e);
  //     }
  // };
  // const addDataToArray = async (inputData) => {
  //     try {
  //         // Retrieve the existing array
  //         const existingData = await AsyncStorage.getItem('@your_data_key');


  //         if (existingData !== null) {
  //             setDataArray(JSON.parse(existingData));
  //         }

  //         // Add the new object to the array
  //         setDataArray([...dataArray, inputData]);

  //         // Update the AsyncStorage with the updated array
  //         await AsyncStorage.setItem('@your_data_key', JSON.stringify(dataArray));

  //         console.log('Data successfully added to the array!');
  //     } catch (e) {
  //         console.error('Error adding data to the array:', e);
  //     }
  // };

  // useEffect(() => {
  //   initializeAsyncStorage()
  // });


  const option = () => {
    setOptions(true);
  }
  const nav = () => {
    setPopup(true)
    setCards(false)
  }
  const onTouchonscreen = () => {
    setOptions(false)
  }
  const showcards = () => {
    setPopup(false)
    setCards(true)
  }
  const getdata = (inputData) => {
    setDataArray([...dataArray, inputData]);
  }

  const completetask = (index) => {
    let itemscopy = [...dataArray];
    itemscopy.splice(index,1);
    setDataArray(itemscopy);
  };
  // useEffect(()=>{
  //   console.warn(dataArray);
  // },[dataArray])

  return (
    <>
      <View style={styles.container} onStartShouldSetResponder={() => onTouchonscreen()} >
        <View style={styles.MainHeader}>
          <View style={styles.header} >
            <View>
              <Text style={styles.title} >Attendance Manager</Text>
            </View>
            <TouchableOpacity onPress={() => { option() }}>
              <View style={styles.options}  >
                <Text style={styles.optionsbtn}></Text>
                <Text style={styles.optionsbtn}></Text>
                <Text style={styles.optionsbtn}></Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.blackLine} ></View>
        </View>
        <View style={styles.option}>{options && <Options />}</View>
        <ScrollView style={styles.scrollview}>
          <View style={styles.Form}>{popup && <Form onPress={() => { showcards() }} onDataFromChild={getdata} />}</View>

          <View style={styles.cardSection}>
            {cards && dataArray.map((item, index) => {
              return <Card name={item.name} present={item.present} delete={()=>{completetask(index)}} total={item.total} key={index} />;
            })}
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.circle} onPress={() => nav()} >
        <View>
          <Text style={styles.plus} >+</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  MainHeader: {
    flex: 0.2,
    right: 195,
    zIndex: 6
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: 'red',
    fontSize: 25,
  },
  options: {
    width: 20,
    gap: 3,
    flexDirection: 'column',
  },
  optionsbtn: {
    height: 5,
    width: 5,
    fontSize: 5,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  blackLine: {
    position: 'absolute',
    top: 120,
    height: 10,
    width: '100%',
    backgroundColor: 'black',
  },
  cardSection: {
    width: '100%',
    height: 1500,
    alignItems: 'center'
  },
  Form: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    top: 150,
    left: 20
  },
  option: {
    top: 100,
    right: 55,
    zIndex: 9,
    position: 'absolute'
  },
  scrollview: {
    width: '100%',
    height: 100
  },
  modal: {
    height: 20,
    width: 15,
  },
  aboutBtn: {
    height: 100,
    width: 100,
    left: 250,
    top: 65,
    borderRadius: 10
  },
  circle: {
    position: 'absolute',
    width: 70,
    height: 70,
    top: 700,
    right: 20,
    borderRadius: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    zIndex: 8
  },
  plus: {
    fontSize: 40,
    fontWeight: '300',
    color: 'red',
  },
});