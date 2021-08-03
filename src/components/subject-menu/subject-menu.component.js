import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

import {
    SubjectMenuWrapper,
    MenuArea,
    MenuItem,
    ContentArea
} from './subject-menu.styles';

import SubjectOutline from '../subject-outline/subject-outline.component';


const SubjectMenu = ({ toggleSubjectsVisible, history }) => {
    const [currentSubject, setCurrentSubject] = useState('math');
    const [mathBg, setMathBg] = useState('rgb(99, 181, 61)');
    const [scienceBg, setScienceBg] = useState('white');

    return (
        <SubjectMenuWrapper>
            <MenuArea>

                <MenuItem
                    onMouseEnter={() => {
                        setCurrentSubject('math');
                        setMathBg('rgb(99, 181, 61)');
                        setScienceBg('white');
                    }}
                    bg={mathBg}
                    onClick={() => {
                        history.push('/subject/math');
                        toggleSubjectsVisible(false);
                    }}
                >
                    <span>Mathematics</span>
                    <span style={{fontSize: '1.5rem', fontWeight: 700}}>&rsaquo;</span>
                </MenuItem>

                <MenuItem
                    onMouseEnter={() => {
                        setCurrentSubject('science');
                        setMathBg('white');
                        setScienceBg('rgb(0, 161, 113)');
                    }}
                    bg={scienceBg}
                    onClick={() => {
                        history.push('/subject/science');
                        toggleSubjectsVisible(false);
                    }}
                >
                    <span>Science</span>
                    <span style={{fontSize: '1.5rem', fontWeight: 700}}>&rsaquo;</span>
                </MenuItem>

            </MenuArea>
            <ContentArea subject={currentSubject}>
                <SubjectOutline subject={currentSubject} />
            </ContentArea>
        </SubjectMenuWrapper>
    )
};



export default withRouter(SubjectMenu);
