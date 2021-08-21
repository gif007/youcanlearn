import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import {
    SignUpWrapper,
    TitleWrapper,
    SignUpForm,
    HorizontalRule,
    CustomFieldSet,
    FormLegend,
    CustomLabel,
    CustomInput,
    DoubleInputContainer,
    ButtonWrapper,
    LoginLinkContainer
} from './sign-up.styles';


const SignUp = ({ signUp }) => {
    const [credentials, setCredentials] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        password2: ''
    });

    const { fname, lname, email, password, password2 } = credentials;

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert("Passwords don't match");
            setCredentials({
                ...credentials,
                password: '',
                password2: ''
            });
            return;
        }

        signUp(credentials);
    }
    
    return (
    <SignUpWrapper onSubmit={handleSubmit}>
        <TitleWrapper>Sign up</TitleWrapper>
        <SignUpForm>
            <HorizontalRule />
            <FormLegend>Sign up with password</FormLegend>
            <CustomFieldSet>
                <CustomLabel htmlFor='fname'>Name</CustomLabel>
                <DoubleInputContainer>
                    <CustomInput
                        type='text'
                        name='fname'
                        id='fname'
                        placeholder='First name'
                        value={fname}
                        required
                        onChange={handleChange}
                    />
                    <CustomInput
                        type='text'
                        name='lname'
                        id='lname'
                        placeholder='Last name'
                        value={lname}
                        required
                        onChange={handleChange}
                    />
                </DoubleInputContainer>
            </CustomFieldSet>
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
                <DoubleInputContainer>
                    <CustomInput
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        value={password}
                        required
                        onChange={handleChange}
                    />
                    <CustomInput
                        type='password'
                        name='password2'
                        id='password2'
                        placeholder='Repeat password'
                        value={password2}
                        required
                        onChange={handleChange}
                    />
                </DoubleInputContainer>
            </CustomFieldSet>
            <ButtonWrapper type='submit'>Next</ButtonWrapper>
            <LoginLinkContainer>Already a member? <Link to='/login'>Log in</Link></LoginLinkContainer>
        </SignUpForm>
    </SignUpWrapper>
)};

const mapDispatchToProps = dispatch => ({
    signUp: (credentials) => dispatch(signUpStart(credentials))
})

export default connect(null, mapDispatchToProps)(SignUp);