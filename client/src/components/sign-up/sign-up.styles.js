import styled from 'styled-components';


export const SignUpWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(
        0deg
        ,#f8c642 40rem,#ff8145);
    padding: 60px 0;
`;

export const TitleWrapper = styled.h1`
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 3rem;
`;

export const SignUpForm = styled.form`
    position: relative;
    background: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    padding: 40px 20px 30px 20px;

    @media screen and (max-width: 800px) {
        width: 90vw;
    }
`;

export const HorizontalRule = styled.hr`
    position: absolute;
    top: 20px;
    height: 1px;
    color: black;
    width: 90%
`;

export const FormLegend = styled.h2`
    font-size: .9rem;
    margin: 0 auto;
    position: absolute;
    top: 20px;
    padding: 0 8px;
    background: white;

`;

export const CustomFieldSet = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const CustomLabel = styled.label`
    font-size: .9rem;
    font-weight: 700;
    margin: .75rem 0;
`;

export const CustomInput = styled.input`
    height: 2.5rem;
    border-radius: 6px;
    border: 1px solid lightgrey;
    padding: 8px;
`;

export const DoubleInputContainer = styled.div`
    display: flex;
    justify-content: space-between;

    input {
        width: 49%;
    }
`;

export const ButtonWrapper = styled.button`
    width: 100%;
    height: 50px;
    background: #5797c3;
    border: unset;
    border-radius: 90px;
    color: white;
    cursor: pointer;
    margin-top: 2rem;
    font-size: 1rem;

    :hover {
        background: #457799;
    }
`;

export const LoginLinkContainer = styled.div`
    font-size: .9rem;
    text-align: center;
    margin-top: 1rem;

    a {
        font-weight: 700;
        text-decoration: none;
        color: #5797c3;

        :hover {
            cursor: pointer;
        }
    }
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: .8rem;
    margin-top: 1rem;
`;

export const SpinnerWrapper = styled.div`
    margin-top: 1rem;
    height: 75px;
`;