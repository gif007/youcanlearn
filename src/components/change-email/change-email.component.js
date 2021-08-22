import React, { useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { updateUserEmailStart } from '../../redux/user/user.actions';

import {
    selectCurrentUser,
    selectErrorMessage,
    selectIsEmailUpdating,
    selectIsEmailChanged
} from '../../redux/user/user.selectors';

import Spinner from '../spinner/spinner.component';


const ChangeEmail = ({ currentUser, error, updateUserEmail, emailIsUpdating, emailChanged }) => {

    const [credentials, setCredentials] = useState({
        oldEmail: currentUser.email,
        newEmail: currentUser.email,
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserEmail(credentials);
    }

    return (
        <div style={{padding: '40px'}}>
            <div style={{fontWeight: 700, marginBottom: '2rem'}}>Change email</div>
            <form onSubmit={handleSubmit}>
                <input type='hidden' id='oldEmail' name='oldEmail' value={credentials.oldEmail} />
                <label htmlFor='newEmail'>Email&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input
                    style={{marginBottom: '1rem'}}
                    disabled={emailChanged}
                    onChange={handleChange}
                    type='email'
                    id='newEmail'
                    name='newEmail'
                    value={credentials.newEmail}
                    required
                />< br />
                <label htmlFor='password'>Password&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input
                    disabled={emailChanged}
                    onChange={handleChange}
                    type='password'
                    id='password'
                    name='password'
                    value={credentials.password}
                    required
                /><br />
                {
                    emailIsUpdating ? (
                        <div>
                            <Spinner />
                        </div>
                    ) : emailChanged ? (
                        <div style={{textAlign: 'center', fontSize: '1.25rem', color: 'green', marginTop: '1rem'}}>
                            Success!
                        </div>
                    ) : (
                        <button type='submit' style={{marginTop: '2rem'}}>Submit</button>
                    )
                }
            </form>
            {
                error ? (
                    <div>{error}</div>
                ) : null
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    error: selectErrorMessage,
    emailIsUpdating: selectIsEmailUpdating,
    emailChanged: selectIsEmailChanged
});

const mapDispatchToProps = dispatch => ({
    updateUserEmail: (userDetails) => dispatch(updateUserEmailStart(userDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail);