import React, { useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {updateUserNameStart } from '../../redux/user/user.actions';

import {
    selectCurrentUser,
    selectErrorMessage,
    selectIsNameChanged,
    selectIsNameUpdating
} from '../../redux/user/user.selectors';

import { ChangeInfoContainer } from './personl-info.styles';

import Spinner from '../spinner/spinner.component';


const PersonalInfo = ({ currentUser, updateName, error, nameIsUpdating, nameChanged }) => {
    const [name, setName] = useState({
        fname: currentUser.fname,
        lname: currentUser.lname
    });

    const { fname, lname } = name;

    const handleChange = (e) => {
        setName({
            ...name,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateName(name);
    }

    return (
        <ChangeInfoContainer>
            <h2 style={{fontWeight: 700, marginBottom: '2rem'}}>Personal Information</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='fname'>First Name</label>
                <input disabled={nameChanged} onChange={handleChange} value={fname} type='text' id='fname' name='fname' required /><br /><br />
                <label htmlFor='lname'>Last Name</label>
                <input disabled={nameChanged} onChange={handleChange} value={lname} type='text' id='lname' name='lname' required /><br /><br />
                {
                    nameIsUpdating ? (
                        <Spinner />
                    ) : nameChanged ? (
                        <div>Success!</div>
                    ) : (
                        <button type='submit'>Save</button>
                    )
                }
            </form>
            {
                error ? (
                    <div>{error}</div>
                ) : null
            }
        </ChangeInfoContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    error: selectErrorMessage,
    nameIsUpdating: selectIsNameUpdating,
    nameChanged: selectIsNameChanged
});

const mapDispatchToProps = dispatch => ({
    updateName: (name) => dispatch(updateUserNameStart(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);