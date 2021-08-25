import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { emailSignInStart } from '../../redux/user/user.actions';

import {
    selectErrorMessage,
    selectIsAuthenticating
} from '../../redux/user/user.selectors';

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
    LoginLinkContainer,
    ErrorMessage,
    SpinnerWrapper
} from './sign-in.styles';

import Spinner from '../spinner/spinner.component';


const SignIn = ({ signIn, error, isAuthenticating }) => {
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
            {
                error ? (
                    <ErrorMessage>{error}</ErrorMessage>
                ) : null
            }
            {
                isAuthenticating ? (
                    <SpinnerWrapper>
                        <Spinner />
                    </SpinnerWrapper>
                ) : (
                    <ButtonWrapper type='submit'>Log in</ButtonWrapper>
                )
            }
            <LoginLinkContainer>New member? <Link to='/signup'>Sign up</Link></LoginLinkContainer>
        </SignUpForm>
    </SignInWrapper>
)};

const mapDispatchToProps = dispatch => ({
    signIn: (credentials) => dispatch(emailSignInStart(credentials))
})

const mapStateToProps = createStructuredSelector({
    error: selectErrorMessage,
    isAuthenticating: selectIsAuthenticating
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);