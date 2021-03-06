import styled from 'styled-components';


export const ChangeEmailContainer = styled.div`
    padding: 40px;

    form {
        label {
            width: 80px;
            display: inline-block;
            text-align: right;
        }
        input {
            width: 350px;
            margin-left: 12px;
        }
    }

    @media screen and (max-width: 800px) {
        padding: 40px 20px 20px 20px;
    }
`;