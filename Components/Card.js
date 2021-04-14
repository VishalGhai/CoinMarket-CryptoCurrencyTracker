import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen'
const Card = ({value,isDarkMode}) => {
    
    const styles = StyleSheet.create({
        cardStyle: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        padding:20,
        margin:10,
        borderRadius:15,
        maxHeight:110,
        minHeight:110
    }
})
return (
    <View style={styles.cardStyle}>
        <View style={{flex:4,flexDirection:'column'}}>
            <Text style={{flex:2,fontSize:20}}>{value.symbol.substring(0,3)}</Text>
            <Text style={{marginTop:3,flex:1,fontSize:12,color:value.priceChange>0?'green':value.priceChange<0?'red':'blue'}}>{value.priceChange}</Text>
            </View>
        <Text style={{flex:1,fontSize:15,textAlign:'right'}}>{value.weightedAvgPrice}</Text>
    </View>
)
}

export default Card
