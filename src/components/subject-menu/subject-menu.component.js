import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

import {
    SubjectMenuWrapper,
    MenuArea,
    MenuItem,
    ContentArea
} from './subject-menu.styles';

import CourseOutline from '../course-outline/course-outline.component';

import MATH_COURSES from '../../data/math';
import SCIENCE_COURSES from '../../data/science';


const SubjectMenu = ({ toggleSubjectsVisible, history }) => {
    const [currentSubject, setCurrentSubject] = useState('math');
    const [mathBg, setMathBg] = useState('white');
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
                        history.push('/s/1');
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
                        history.push('/s/2');
                        toggleSubjectsVisible(false);
                    }}
                >
                    <span>Science</span>
                    <span style={{fontSize: '1.5rem', fontWeight: 700}}>&rsaquo;</span>
                </MenuItem>

            </MenuArea>
            <ContentArea subject={currentSubject}>
                {
                    currentSubject === 'math' ? (
                       
                        <CourseOutline subject={MATH_COURSES}/>
                    ) : (
                        <CourseOutline subject={SCIENCE_COURSES}/>
                    )
                }
            </ContentArea>
        </SubjectMenuWrapper>
    )
};

export default withRouter(SubjectMenu);
