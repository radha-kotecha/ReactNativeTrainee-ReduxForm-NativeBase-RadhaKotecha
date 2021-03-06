import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import UserDetails from './src/Containers/UserDetails';
import ProfilePicture from './src/Containers/ProfilePicture';
import LoginCredentials from './src/Containers/LoginCredentials';
import ReviewData from './src/Containers/ReviewData';
import Login from './src/Containers/Login'
import Home from './src/Containers/Home'
import styles from './src/Resources/Styles/styles'

const Main = () => {

    return (
        <Router
            navigationBarStyle={styles.header}
            titleStyle={styles.navTitle}
        >
            <Scene key='root'>
                <Scene
                    key="Home"
                    component={Home}
                    title="Home"
                    left={()=>null}
                    type={ActionConst.RESET}
                    initial
                />
                <Scene
                    key="Login"
                    component={Login}
                    title="Login"
                    type={ActionConst.RESET}
                    left={()=>null}
                />
                <Scene
                    key="UserDetails"
                    component={UserDetails}
                    title="User Details"
                    left={()=>null}
                />
                <Scene
                    key="ProfilePicture"
                    component={ProfilePicture}
                    title="Profile Picture"
                />
                <Scene
                    key="LoginCredentials"
                    component={LoginCredentials}
                    title="Login Credentials"
                />
                <Scene
                    key="ReviewData"
                    component={ReviewData}
                    title="Review Data"
                />
            </Scene>
        </Router>
    );
};
export default Main
