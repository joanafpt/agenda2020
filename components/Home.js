import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import ScreenStyles from '../constants/ScreenStyles';
import Buttons from '../constants/Buttons';
import Container from '../constants/Container';
import Icons from '../constants/Icons';
import { Ionicons } from '@expo/vector-icons';
import EntryClock from './EntryClock';
import ChangeData from './ChangeData';

export default function Home({ navigation }) {

    const onPressButtonAddNewTask = () => {
        navigation.navigate('SecondAddNewTask');
    }

    const onPressButtonGoToTaskList = () => {
        navigation.navigate('List');
    }

    const onPressButtonGoToComplete = () => {
        navigation.navigate('ApiResults')
    }

 /* const getCurrentData = () => {
        return new Date().toLocaleString();
    }
    const date = getCurrentData();  */

    return (
        <View style={ScreenStyles.screen}>
            <View style={styles.header}>
                {/* <Text style={styles.headerText}>Olá! Hoje é dia</Text>*/}
                <ChangeData />
                {/* <Text style={styles.headerText}>Olá! Hoje é dia {date.substr(0, 10)}</Text> */}
                <EntryClock />
            </View>
            <View style={Container.container}>
                <View style={Icons.iconView}>

                    <Text style={Icons.icons}>
                        <Ionicons
                            name="ios-at"
                            size={55}
                            color="black"
                        />
                    </Text>

                    <Text style={Icons.icons}>
                        <Ionicons
                            name="ios-construct"
                            size={55}
                            color="black" />
                    </Text>

                    <Text style={Icons.icons}>
                        <Ionicons
                            name="ios-basketball"
                            size={55}
                            color="black" />
                    </Text>

                </View>

                <View style={Buttons.buttonsContainer}>
                    <TouchableOpacity
                        style={Buttons.firstButton}
                        onPress={onPressButtonAddNewTask}>
                        <Text style={Buttons.buttonText}>Novo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={Buttons.secondButton}
                        onPress={onPressButtonGoToTaskList}>
                        <Text style={Buttons.buttonText}>Diário</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={Buttons.secondButton}
                        onPress={onPressButtonGoToComplete}>
                        <Text style={Buttons.buttonText}>Todos</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#0FCFF3',
        height: '15%',
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
});

