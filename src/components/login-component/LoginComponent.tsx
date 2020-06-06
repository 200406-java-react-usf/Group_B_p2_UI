import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import { GoogleLoginButton } from 'ts-react-google-login-component';

import { loginAction } from '../../actions/login-actions'

import { 
    Typography, 
    FormControl, 
    InputLabel, 
    Input, 
    Button, 
    makeStyles, 
    Divider
} from '@material-ui/core';

import { Redirect } from 'react-router';
import { User } from '../../models/User';

interface ILoginProps {
    authUser: User;
    //gUser: User;
    errorMessage: string;
    loginAction: (username: string, password: string) => void;
}

const useStyles = makeStyles({
    loginContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
    loginForm: {
        width: "50%"
    },
    centerButton:
    {
        display: "flex",
        justifyContent: "center"
    }
});

function LoginComponent(props: ILoginProps) {

    const classes = useStyles();

    const clientConfig = { client_id: '591571828049-u4mun2n3qqfoeit95o7rv5f45pvqsac0.apps.googleusercontent.com' }


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let updateForm = (e: any) => {
        switch (e.currentTarget.id){
            case 'username':
                setUsername(e.currentTarget.value);
                break;
            case 'password':
                setPassword(e.currentTarget.value);
                break;
            default:
                console.warn(`Error binding; element with id: ${e.currentTarget.id}`);
        }
    }

    let login = async () => {
        props.loginAction(username, password);
    }

    let preLoginTracking = async () => {
        console.log('Login with Google');
    }
 
    let errorHandler = async (error: string) => {
        console.error(error);
    }
 
    // let responseGoogle = async (googleUser: gapi.auth2.GoogleUser) => {
    //     const id_token = googleUser.getAuthResponse(true).id_token
    //     const googleId = googleUser.getId()
        
    //     const user = googleUser.getBasicProfile();
    //     //getName will equal getGivenName if no familyName is provided
    //     console.log(user.getId());
    //     console.log(user.getGivenName());
    //     console.log(user.getFamilyName());
    //     console.log(user.getName());
    //     console.log(user.getEmail());

    //     // props.gUser.username = user.getName();
    //     // props.gUser.email = user.getEmail();
    //     // props.gUser.first_name = user.getGivenName();
    //     // props.gUser.last_name = "GoogleGuest";
    //     // props.gUser.password = user.getId();

    //     // console.log(props.gUser);
    //     // console.log({ googleId })
    //     // console.log({accessToken: id_token})

    // }

    return (
        props.authUser ?
        <Redirect to="/home" /> :
        <>
            <div className={classes.loginContainer}>
                <form className={classes.loginForm}>
                    <Typography align="center" variant="h4">Login to Meme Store!</Typography>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input 
                            onChange={updateForm} 
                            value={username} 
                            id="username" type="text" 
                            placeholder="Enter your username" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input 
                            onChange={updateForm}
                            value={password}
                            id="password" type="password"
                            placeholder="Enter your password"/>
                    </FormControl>
                    <br/><br/>
                    <Button onClick={login} variant="contained" color="secondary" size="medium">Login</Button>
                    <br/><br/>
                    <Divider variant="middle" />
                    <br/><br/>
                    <div className={classes.centerButton}>
                    {/* <GoogleLoginButton
                        responseHandler={responseGoogle}
                        clientConfig={clientConfig}
                        preLogin={preLoginTracking}
                        failureHandler={errorHandler}
                    /> */}
                    </div>
                    {
                        props.errorMessage 
                            ? 
                        <Alert severity="error">{props.errorMessage}</Alert>
                            :
                        <></>
                    }
                </form>
            </div>
        </> 
    );
    
}

export default LoginComponent;