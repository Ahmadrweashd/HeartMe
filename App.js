import React from 'react'
import { Image,Text , TextInput , Button, View ,TouchableOpacity  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LoginPage } from './src/components/LoginPage';
import { RegisterPage } from './src/components/RegisterPage';
import HomePage from './src/components/HomePage';
import ResultesPage from './src/components/ResultesPage';


///App is the main component it will navigate to LoginPage ///
class App extends React.Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          onPress={() => navigate('Login')}
        />
      );
    }
  }
  
//// navigation paths
  const MainNavigator = createStackNavigator({
    Login : LoginPage ,
    Register : RegisterPage ,
    Home : HomePage ,
    Resultes :ResultesPage
  });
  
   const App1 = createAppContainer(MainNavigator);
   export default App1;