import styled from 'styled-components';


export const ContentWrapper = styled.div`
    height: 450px;
    width: 100%;
`;

export const AnswerForm = styled.form`
    margin-top: 1rem;
    padding-top: 1rem;
    height: 100%;
    width: 100%;
`;

export const CustomFieldSet = styled.fieldset`
    width: 100%;
    height: 100%;
`;

export const FormLegend = styled.legend`
    text-align: center;
    font-size: 1.125rem;
    margin: 2rem 0;

    @media screen and (max-width: 800px) {
        margin: .5rem 0;
    }
`;

export const AnswerWrapper = styled.div`
    position: relative;
    border: 1px solid lightgrey;
    border-radius: 6px;
    height: 60px;
    margin: 1rem 0;
    display: flex;
    align-items: center;
`;

export const CustomRadioButton = styled.input`
    cursor: pointer;
    position: absolute;
    left: 12px;
    z-index: 9999;
`;

export const CustomLabel = styled.label`
    cursor: pointer;
    padding-left: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
`;

export const SubmitButton = styled.button`
    width: 100%;
    border: unset;
    height: 40px;
    color: white;
    background: #5797c3;
    cursor: pointer;
    border-radius: 80px;
    margin-top: 1rem;

    :hover {
        background: #457799;
    }

    @media screen and (max-width: 800px) {
        margin: .5rem 0;
    }
`;

export const CenterContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ResultWrapper = styled.h2`
    font-size: 1.125rem;
    margin-bottom: 1rem;
`;