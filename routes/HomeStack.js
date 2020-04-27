import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home';
import List from '../components/List';
import ApiResults from '../components/ApiResults';
import SecondAddNewTask from '../components/SecondAddNewTask';
import Tranche from '../components/Tranche';
import TestParcial from '../components/TestParcial';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
        },
    },
    SecondAddNewTask: {
        screen: SecondAddNewTask,
        navigationOptions: {
            title: 'Nova tarefa',
        },
    },
    List: {
        screen: List,
        navigationOptions: {
            title: 'Lista',
        },
    },
    ApiResults: {
        screen: ApiResults,
        navigationOptions: {
            title: 'Tarefas',
        },
    },
    Tranche: {
        screen: Tranche,
        navigationOptions: {
            title: 'Pesquisa parcial',
        }
    },
    TestParcial: {
        screen: TestParcial,
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);