import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { CheckOutlined,CloseOutlined} from '@rneui/themed';


const Card = (props) => {
  const [present, setPresent] = useState(props.present);
  const [total, setTotal] = useState(props.total);
  const [percentage, setPercentage] = useState(0);

  // const convertIntoNumber = () => {
  //   setPresent(parseFloat(present));
  //   setTotal(parseFloat(total));
  // }
  const AttendencePercentage = () => {
   
     setPercentage(((present / total) * 100).toFixed(1));
  }
  const PresentButton = () => {
    setPresent(present => present + 1);
    setTotal(total =>total + 1)
  }
  const AbsentButton = () => {
    setTotal(total=>total + 1);
  }
  const ResetButton=()=>{
    setPresent(0);
    setTotal(0);
    setPercentage(0);
  }
  const UpdateButton=()=>{
    props.updateData({present:present,total:total});
  }
  useEffect(() => {
    // convertIntoNumber();
    AttendencePercentage();
  });
  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Text style={styles.subjectName}>{props.name.toUpperCase()}</Text>
        <View style={{flexDirection:'row',alignItems:'center',gap:30}} >
        <TouchableOpacity onPress={()=>{ResetButton()}} >
          <Icon name={'undo'} color={'yellow'} size={28} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{UpdateButton()}}>
          <Icon name={'edit'} color={'white'} size={28} />
        </TouchableOpacity>
        <TouchableOpacity style={{right:10}} onPress={()=> props.delete()}>
          <Icon name={'trash'} color={'blue'} size={28} />
        </TouchableOpacity>
        </View>
      </View>
      <View >
        <Text style={styles.attendence}>Attendence :  {present}/{total}</Text>
      </View>
      <View >
        <Text style={styles.attendence}>Percentage :  {percentage}</Text>
      </View>
      <View style={styles.checkBox} >
        <TouchableOpacity onPress={() => { PresentButton() }}>
          <Icon name={'check'} color={'green'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { AbsentButton() }}>
          <Icon name={'times'} color={'red'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: '90%',
    backgroundColor: 'black',
    borderRadius: 8,
    zIndex: 1,
    margin: 10,
    top: 70
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: "center",
  },
  subjectName: {
    color: 'white',
    fontSize: 25,
    paddingTop: 10,
    paddingLeft: 10,
  },
  attendence: {
    color: 'white',
    fontSize: 18,
    left: 10,
  },
  checkBox: {
    flexDirection: 'row',
    gap: 20,
    top: 10,
    left: 250,
  }
})