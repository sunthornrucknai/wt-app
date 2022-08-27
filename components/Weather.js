import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import Forecast from "./Forecast";


export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=40391581d95c62feaa503b141dc7d6f0`)
            .then((response) => response.json())
            .then((json) => {
                 setForecastInfo({
                     main: json.weather[0].main,
                     description: json.weather[0].description,
                     temp: json.main.temp });
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
       

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
        fontSize: 20,
        color: 'white'
    },
    largetext: {
        fontSize:60,
        color: 'white'
    }
})