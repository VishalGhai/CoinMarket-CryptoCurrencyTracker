import React, { useState, useEffect } from 'react';
import TitleBar from './Components/TitleBar'
import Card from "./Components/Card";
import axios from 'axios';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [value, setValue] = useState([])
  const [searchvalue, setSearchValue] = useState('')
  const [defaulttime, setDefaultTime] = useState(2000)

  let interval = ''
  let intervals = []

  async function change() {
    interval=''
    setValue([])
    await new Promise(resolve => {
      interval = setInterval(() => {
        axios.get('https://testnet.binancefuture.com//fapi/v1/ticker/24hr')
        .then((response) => {
          inputSearchHandler(response.data)
          // console.log('updated');
          // inteval(forEach(i=>{clearInterval(i)}))
        })
        .catch(err => {
          // console.error(err)
            inteval(forEach(i=>{clearInterval(i)}))
          })
        }, defaulttime)
        intervals.push(interval)
      })
      // if(searchvalue==='') inteval(forEach(i=>{clearInterval(i)}))
    change()
  }
  
  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustPan()
  }, [])
  
  useEffect(async () => {
    await change();
    return await new Promise(res=>{ window.clearInterval(3) })
  }, [searchvalue])

  const inputSearchHandler = async (data) => {
    if (searchvalue === '') {
      // console.log( "is ",intervals)
      setValue(data);
      // change();
      // return await new Promise(res=>{inteval(forEach(i=>{clearInterval(i)}))})
      // inteval(forEach(i=>{clearInterval(i)}))
    }
    else {
      // console.log( "is ",intervals)
      setValue(data.filter(item => {
        if (item.symbol.includes(searchvalue)) return true
        else return false
      }))
      // return await new Promise(res=>{inteval(forEach(i=>{clearInterval(i)}))})
    }
  }

  const handleInput = (val) => {
    setSearchValue(val)
  }

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const check = {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  }

  return (
    <SafeAreaView style={[backgroundStyle, check]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <TitleBar style={{ flex: 1 }} />
      <TextInput autoCapitalize={'characters'} onChangeText={text => handleInput(text)} defaultValue={searchvalue} style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 15, margin: 10, borderRadius: 20, backgroundColor: 'lightgrey' }} placeholder="Search here..." />
      <View style={{ flex: 35 }}>
        {
          value.length===0?<Text style={{flex:1,fontSize:20,textAlign:'center'}}>Loading...</Text>:
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
          {
            value.map((item, key) => {
              return <Card isDarkMode={isDarkMode} key={key} value={item} />
            })
          }
        </ScrollView>
        }
      </View>
    </SafeAreaView>
  );
};


export default App;
