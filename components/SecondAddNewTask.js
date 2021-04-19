import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, TextInput } from 'react-native';
//import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import ScreenStyles from '../constants/ScreenStyles';
import Buttons from '../constants/Buttons';
import Container from '../constants/Container';
import DatepickerStyles from '../constants/DatepickerStyles';
import Clock from '../constants/Clock';
import OutputsResponses from '../constants/OutputsResponses';
import TextInputStyles from '../constants/TextInputStyles';
import Form from '../constants/Form';
import functions from '../functions/functions';
import { Ionicons } from '@expo/vector-icons';

export default function SecondAddNewTask({ navigation }) {
    const [enteredInput, setEnteredInput] = useState('');
    const [output, setOutput] = useState('');
    const [date, insertDate] = useState(new Date());
    //  const [time, setTime] = useState(''); 

    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

    const pressHome = () => {
        navigation.navigate('Home');
    }

    const pressList = () => {
        navigation.navigate('List');
    }

    const getInput = (input) => {
        setEnteredInput(input);
        //  console.log(enteredInput, ' apanhar o input corretamente!');
    }

    /*   const getTime = (enteredTime) => {
           setTime(enteredTime);
           console.log(time);
       }
   */

    const getHours = (enteredHours) => {
        setHours(enteredHours);
        // console.log(hours);
    }

    const getMinutes = (enteredMinutes) => {
        setMinutes(enteredMinutes);
        // console.log(minutes);
    }


    const obj = {
        'Registo': enteredInput,
        'Data': date,
        //  'Hora': time,
        'Hora': hours.toString().concat(':').concat(minutes.toString())
    }

    const postDataIntoAgenda = () => {
        functions.submitCompromisso(obj, callback)
    }

    const callback = (data) => {
        console.log(data, 'data');
        setOutput(output => [...data]);
    }

    return (
        <View style={ScreenStyles.screen}>
            <View style={Container.container}>
                <View style={Form.form}>

                    <TextInput style={TextInputStyles.textInput}
                        onChangeText={getInput}
                        value={enteredInput}
                        placeholder="Ex.: 'Ir às compras' "
                        />

                    <View style={DatepickerStyles.datepicker}>
                        <DatePicker
                            style={DatepickerStyles.datepicker}
                            date={date}
                            mode="date"
                            placeholder="Selecionar data"
                            format="DD-MM-YYYY"
                            minDate={date}
                            maxDate="31-12-2099"
                            confirmBtnText="OK"
                            cancelBtnText="Cancelar"
                            customStyles={
                                {
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36,

                                    }

                                }
                            }
                            onDateChange={(date) => insertDate(date)}
                        />
                    </View>

                    <View style={Clock.clockContainer}>
                        <View style={{ marginRight: 3, marginTop: 5 }}><Text>
                            <Ionicons
                                name="md-clock"
                                size={32}
                                color="black"
                            /> </Text>
                        </View>

                        <TextInput style={Clock.clockInput}
                            onChangeText={getHours}
                            value={hours}
                            placeholder="hh"
                            
                            />
                        <View style={Clock.twoPoints}>
                            <Text style={Clock.text}>:</Text>
                        </View>
                        <TextInput style={Clock.clockInput}
                            onChangeText={getMinutes}
                            value={minutes}
                            placeholder="mm" />
                    </View>


            

                </View>

                <TouchableOpacity
                    style={Buttons.firstButton}
                    onPress={postDataIntoAgenda}>
                    <Text style={Buttons.buttonText}>Enviar</Text>
                </TouchableOpacity>


                <View style={OutputsResponses.display}>
                    <Text style={OutputsResponses.displayText}>{output}</Text>
                </View>
            </View>


            <Button title="Back Home" onPress={pressHome} />
            <Button title="NewsFlash" onPress={pressList} />

        </View>

    )
}

const styles = StyleSheet.create({
//nothing happening here


});


