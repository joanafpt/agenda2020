import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ChangeData() {
    const [increment, setIncrement] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setIncrement(new Date().toLocaleString()), 1000);
        return () => {
            clearInterval(interval);
            //   console.log(typeof(increment)); //string
        };
    });

    return (
        <View style={styles.dateStyle}>
            <View>
                {/* <Text>Boa tarde, {JSON.stringify(increment)}</Text>*/}
                {/* <Text>Boa tarde, {increment.toLocaleString()}</Text>*/}
                <Text style={styles.dateStyleText}>
                    {increment.toLocaleString().substr(0, 10)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dateStyle: {
        backgroundColor: '#0FCFF3',
        height: 25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateStyleText: {
        color: 'white',
        fontSize: 20
    },
});




