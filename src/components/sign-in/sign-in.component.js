import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { emailSignInStart } from '../../redux/user/user.actions';

import {
    SignInWrapper,
    TitleWrapper,
    SignUpForm,
    HorizontalRule,
    CustomFieldSet,
    FormLegend,
    CustomLabel,
    CustomInput,
    ButtonWrapper,
    LoginLinkContainer
} from './sign-in.styles';


const SignIn = ({ signIn }) => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const { email, password } = credentials;

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(credentials);
    }
    
    return (
    <SignInWrapper onSubmit={handleSubmit}>
        <TitleWrapper>Sign in</TitleWrapper>
        <SignUpForm>
            <HorizontalRule />
            <FormLegend>Sign in with email</FormLegend>
            <CustomFieldSet>
                <CustomLabel htmlFor='email'>Email</CustomLabel>
                <CustomInput
                    type='email'
                    name='email'
                    id='email'
                    placeholder='E-mail'
                    value={email}
                    required
                    onChange={handleChange}
                />
            </CustomFieldSet>
            <CustomFieldSet>
                <CustomLabel htmlFor='password'>Password</CustomLabel>
                    <CustomInput
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        value={password}
                        required
                        onChange={handleChange}
                    />
            </CustomFieldSet>
            <ButtonWrapper type='submit'>Log in</ButtonWrapper>
            <LoginLinkContainer>New member? <Link to='/signup'>Sign up</Link></LoginLinkContainer>
        </SignUpForm>
    </SignInWrapper>
)};

const mapDispatchToProps = dispatch => ({
    signIn: (credentials) => dispatch(emailSignInStart(credentials))
})

export default connect(null, mapDispatchToProps)(SignIn);