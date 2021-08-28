import styled from 'styled-components';


export const QuizWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px 40px 40px;
    overflow: auto;

    @media screen and (max-width: 800px) {
        padding: 0 20px 20px 20px;
    }
`;

export const QuizHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;

    @media screen and (max-width: 800px) {
        height: 140px;
        align-items: unset;
    }
`;

export const HorizontalRule = styled.hr`
    position: absolute;
    top: 70px;
    width: 100%;
    height: 1px;
    color: lightgrey;
    padding: unset;
    margin: unset;

    @media screen and (max-width: 800px) {
        top: 140px;
    }
`;

export const PointsContainer = styled.div`
    width: 55%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        position: absolute;
        top: 70px;
        left: 5%;
        width: 90%;
    }
`;

export const PointBlock = styled.div`
    height: 30px;
    width: 19%;
    border-radius: 6px;
    background: ${props => props.filled ? `blue` : `#f0f0f0`};
`;

export const HealthContainer = styled.div`
    width: 15%;
    height: 50px;
    margin-left: 12px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
        position: absolute;
        left: 12px;
        top: 12px;
        margin-left: unset;
    }
`;

export const HeartWrapper = styled.img`
    margin-left: 8px;
`;

export const LanguageSelector = styled.form`
    width: 20%;
    height: 50px;
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px) {
        position: absolute;
        margin-left: unset;
        top: 12px;
        left 40%;
    }
`;

export const QuizContent = styled.div`
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