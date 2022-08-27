import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import Forecast from "./Forecast";


export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
           <Text style={styles.smalltext}>Zip Code</Text>
           <Text style={styles.largetext}>{props.zipCode}</Text>
           <Text style={styles.smalltext}>
           <Forecast {...forecastInfo}/>
           </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'blue'
    },
    smalltext: {
        fontSize: 40,
        color: 'white'
    },
    largetext: {
        fontSize:80,
        color: 'white'
    }
})