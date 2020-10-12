import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
   
    const googleSignInBtn = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
         }
       
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
          
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          
          });
        
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }
    
    return (
        <div style={{height:'100vh'}} className='d-flex align-items-center p-5'>
            <Container>
                <Row className="mt-2">
                    <Col md={7} className="mx-auto">
                        <div className="p-5 ">
                            <h3 className="text-center pb-3">Login With</h3>
                            <div className="d-flex justify-content-center">
                                <Button className="" style={{ fontSize: "20px" }} variant="outline-info" onClick={googleSignInBtn}><img className="px-4 mx-2" src="https://img.icons8.com/color/30/000000/google-logo.png" alt="Google" /> Continue with Google</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;