import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

import {
    SubjectMenuWrapper,
    MenuArea,
    MenuItem,
    ContentArea
} from './subject-menu.styles';

import MATH_COURSES from '../../data/math';

const mathCoursesArray = Object.keys(MATH_COURSES).map(key => MATH_COURSES[key]);


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
                        <ul>
                            {
                                mathCoursesArray.map(elem => {
                                    return (
                                        <li>
                                            <div style={{marginBottom: '0.5rem'}}>
                                                <a href='/' style={{fontWeight: 700}}>{elem.title}</a>
                                            </div>
                                            <ul style={{marginBottom: '2rem'}}>
                                                {
                                                    elem.sections.map(section => {
                                                        return <li style={{marginBottom: '0.25rem'}}><a href='/'>&rsaquo; {section.title}</a></li>
                                                    })
                                                }
                                            </ul>
                                        </li>)
                                })
                            }
                        </ul>
                    ) : (
                        <div>Science!</div>
                    )
                }
            </ContentArea>
        </SubjectMenuWrapper>
    )
};

export default withRouter(SubjectMenu);
