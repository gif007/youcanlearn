import React from 'react';

import {
    CreateAccountWrapper,
    Heading,
    Text,
    LinkWrapper
} from './create-account.styles';


const CreateAccount = ({ setIsModalHidden }) => (
    <CreateAccountWrapper>
        <Heading>Create a free account to take the quiz.</Heading>
        <Text>By signing up you will get access to this and many more quizzes. If you join a school with a membership you will also get access to every lesson.</Text>
        <LinkWrapper
            to='/signup'
            onClick={() => setIsModalHidden(true)}
        >
            Create account
        </LinkWrapper>
    </CreateAccountWrapper>
);

export default CreateAccount;