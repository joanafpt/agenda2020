import React, { useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, FlatList } from 'react-native';
import DatePicker from 'react-native-datepicker';
//import axios from 'axios';
import ScreenStyles from '../constants/ScreenStyles';
import Buttons from '../constants/Buttons';
import Container from '../constants/Container';
import DatepickerStyles from '../constants/DatepickerStyles';
import FlatListStyles from '../constants/FlatListStyles';
import OutputsResponses from '../constants/OutputsResponses';

import functions from '../functions/functions';

export default function List({ navigation }, props) {
    const [dateToSearch, setDateToSearch] = useState('');
    const [responseFromDB, setResponseFromDB] = useState('');
    const [responseIsString, setResponseIsString] = useState(false);

    const pressAbout = () => {
        navigation.navigate('SecondAddNewTask');
    }

    const pressHome = () => {
        navigation.navigate('Home');
    }

    const callback = (data) => {
        (dateToSearch) => setDateToSearch(data)
        setResponseFromDB(responseFromDB => data) // atenbcao, diferenciar se é string de se nao é! 
        //para q output saia correto
        //  console.log(data, ' data dentro do callback');
        // console.log(typeof(data), 'typeof data')
        typeof (data) === 'string' ? setResponseIsString(true) : setResponseIsString(false)
    }

    const getTaskByProvidedDate = () => {
        // console.log(functions.searchCompromissoByDate)
        functions.searchCompromissoByDate(dateToSearch, callback)
    }

    return (
        <View style={ScreenStyles.screen}>
            <View style={Container.container}>
                <DatePicker
                    style={DatepickerStyles.datepicker}
                    date={dateToSearch}
                    mode="date"
                    placeholder="Selecionar data"
                    format="DD-MM-YYYY"
                    minDate={dateToSearch}
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
                    onDateChange={(dateToSearch) => setDateToSearch(dateToSearch)}
                />

                {/*     <Button title="test"  onPress={getTaskByProvidedDate} /> */}

                <View style={Buttons.buttonsContainer}>
                    <TouchableOpacity
                        style={Buttons.firstButton}
                        onPress={getTaskByProvidedDate}>
                        <Text style={Buttons.buttonText}>Enviar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={Buttons.secondButton}
                        onPress={() => { alert('limpar valores') }}>
                        <Text style={Buttons.buttonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    {!responseIsString ?
                        <View style={FlatListStyles.flatList}>
                            <FlatList
                                keyExtractor={(item, index) => item._id}
                                data={responseFromDB}
                                renderItem={item => (
                                    <View>
                                        <Text>
                                            ID: {item.item['_id']} {"\n"}
                                    Compromisso: {item.item['Registo']}{"\n"}
                                    Data: {item.item['Data']}{"\n"}
                                    Hora: {item.item['Hora']} {"\n"}
                                        </Text>
                                    </View>
                                )}>
                            </FlatList>
                        </View>
                        :
                        <View style={FlatListStyles.flatList}>
                            <FlatList
                                keyExtractor={(item => Math.floor(Math.random() * 10000000).toString())}
                                data={responseFromDB[0]}
                                renderItem={item => (
                                    <View>
                                        <Text style={OutputsResponses.noResults}>
                                            {responseFromDB}
                                        </Text>
                                    </View>
                                )}>
                            </FlatList>
                        </View>
                    }
                </View>
            </View>

            <Button title='go to AddNewTask' onPress={pressAbout} />
            <Button title='go to Home' onPress={pressHome} />
        </View>

    )

}

const styles = StyleSheet.create({



});
