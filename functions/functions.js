import axios from 'axios';
import axiosRetry from 'axios-retry';

const teste = () => {
    alert("estou aqui");
}

const getCompleteDataFromApi = (callback) => {
    axiosRetry(axios, { retries: 5 });
    axios.get('https://agenda2020.glitch.me/api/agenda/todos/')
        .then(response => {
            console.log(response.data);
            //isto tem de estar onde estiver o state, nao aqui
            //  setDataToRender(dataToRender => [...response.data]); 
            if (callback) {
                callback(response.data);
            }
        })
        .catch(error => {
            console.log(error, 'error');
        })
}

const searchCompromissoByDate = (dateToSearch, callback) => {
    axiosRetry(axios, { retries: 5 });
    axios.get('https://agenda2020.glitch.me/api/agenda/os-meus-compromissos/?date=' + dateToSearch)
        .then(response => {
            console.log(response.data, ' response.data dentro da api call');
            if (callback) { //p mandar os dados para o ficheiro do componente
                callback(response.data);
            }
        })
        .catch(error => { console.log(error) })
}

const submitCompromisso = (obj, callback) => {
    axiosRetry(axios, { retries: 10 });
    axios.post('https://agenda2020.glitch.me/api/agenda/novo', obj)
        .then(response => {
            console.log(response.data, ' response.data dentro das funcoes')
            if (callback) {
                callback(response.data);
            }
            //  setOutput(output => response.data);
        })
        .catch(error => {
            console.log(error);
            callback(response.data); //inseri isto p ver se o erro vai p response e é renderizado tb
        })
}

const sendOnlyHoursAndMinutes = (objTwo, callback) => {
    axiosRetry(axios, { retries: 10 });
    axios.post('https://agenda2020.glitch.me/api/agenda/time', objTwo)
        .then(response => {
            console.log(response.data, ' response.data ')
            if (callback) {
                callback(response.data);
            }
        })
        .catch(error => { console.log(error) })
}

const getByDates = (initDate, endDate, callback) => {
    //  console.log(initDate, 'initDate dentro do axios')
    // console.log(endDate, ' enddate dentro do axios')
    //   console.log(typeof(initDate))
    //   console.log('https://agenda2020.glitch.me/api/agenda/compromissos-por-data/?dates=' + initDate+ endDate)
    axios.get('https://agenda2020.glitch.me/api/agenda/compromissos-por-data/?dates=' + initDate + endDate)
        .then(response => {
            // console.log('estou aqui');
            // console.log(response.data, ' response.data')
            if (callback) {
                callback(response.data);
            }
        }).catch(error => { console.log(error) })
}

const functionsToExport = {
    getCompleteDataFromApi: getCompleteDataFromApi,
    teste: teste,
    searchCompromissoByDate: searchCompromissoByDate,
    submitCompromisso: submitCompromisso,
    getByDates: getByDates,
    sendOnlyHoursAndMinutes: sendOnlyHoursAndMinutes // for test purposes only
}

export default functionsToExport;