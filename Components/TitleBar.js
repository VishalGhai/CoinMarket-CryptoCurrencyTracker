import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const TitleBar = () => {

    return (
        <View style={[style.container, {
            flexDirection: "row"
        }]}>
            <Text style={{ fontSize: 25, flex: 10, justifyContent: "center", marginTop: 15,marginLeft:20,fontWeight: "bold"}}>CoinMarket</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 3,
        // padding:20,
    }
})

export default TitleBar
