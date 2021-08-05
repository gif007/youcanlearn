import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {
    updateSubject,
    updateCourse,
    updateLesson
} from '../../redux/location/location.actions';
import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';

import {
    SubjectMenuWrapper,
    MenuArea,
    MenuItem,
    ContentArea
} from './subject-menu.styles';

import SubjectOutline from '../subject-outline/subject-outline.component';


const SubjectMenu = ({ closeSubjectMenu, setSubject, unsetCourse, unsetLesson }) => {
    const [hoveredSubject, setHoveredSubject] = useState('math');
    const [mathBg, setMathBg] = useState('rgb(99, 181, 61)');
    const [scienceBg, setScienceBg] = useState('white');

    return (
        <SubjectMenuWrapper onClick={(e) => e.stopPropagation()}>
            <MenuArea>

                <MenuItem
                    onMouseEnter={() => {
                        setHoveredSubject('math');
                        setMathBg('rgb(99, 181, 61)');
                        setScienceBg('white');
                    }}
                    bg={mathBg}
                    onClick={() => {
                        setSubject('math');
                        unsetCourse();
                        unsetLesson();
                        closeSubjectMenu();
                    }}
                >
                    <Link to='/subject/math'>
                        <span>Mathematics</span>
                        <span style={{fontSize: '1.5rem', fontWeight: 700}}>&rsaquo;</span>
                    </Link>
                </MenuItem>

                <MenuItem
                    onMouseEnter={() => {
                        setHoveredSubject('science');
                        setMathBg('white');
                        setScienceBg('rgb(0, 161, 113)');
                    }}
                    bg={scienceBg}
                    onClick={() => {
                        setSubject('science');
                        unsetCourse();
                        unsetLesson();
                        closeSubjectMenu();
                    }}
                >
                    <Link to='/subject/science'>
                        <span>Science</span>
                        <span style={{fontSize: '1.5rem', fontWeight: 700}}>&rsaquo;</span>
                    </Link>
                </MenuItem>

            </MenuArea>
            <ContentArea subject={hoveredSubject}>
                <SubjectOutline subject={hoveredSubject} />
            </ContentArea>
        </SubjectMenuWrapper>
    )
};

const mapDispatchToProps = dispatch => ({
    setSubject: (subject) => dispatch(updateSubject(subject)),
    unsetCourse: () => dispatch(updateCourse(null)),
    unsetLesson: () => dispatch(updateLesson(null)),
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
});

export default connect(null, mapDispatchToProps)(SubjectMenu);
