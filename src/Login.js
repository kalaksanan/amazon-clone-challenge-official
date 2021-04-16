import React from 'react'
import styled from 'styled-components'
import {auth, provider} from './Firebase'



function Login({setUser}) {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            let user = result.user;
            let newUser = {
                name : user.displayName,
                email: user.email,
                photo : user.photoURL
            }
            setUser(newUser);
            
            localStorage.setItem('user', JSON.stringify(newUser));
        }).catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div>
            <Container>
                <Content>
                    <AmazonLogo src={'https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.png'}/>
                    <h1>Sign into Amazon</h1>
                    <LoginButton
                    onClick={signIn}
                    >
                        Sigin in with Google
                    </LoginButton>
                </Content>
            </Container>
        </div>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;
` 
const Content = styled.div`
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
` 
const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`
const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    border: 2px solid #a88734;
    padding: 4px 8px;
    cursor: pointer;

`





