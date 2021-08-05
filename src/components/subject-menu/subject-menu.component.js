import React, {useState} from 'react';

import { withRouter } from 'react-router-dom';

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


const SubjectMenu = ({ closeSubjectMenu, history, setSubject, unsetCourse, unsetLesson }) => {
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
                        history.push('/subject/math');
                        setSubject('math');
                        unsetCourse();
                        unsetLesson();
                        closeSubjectMenu();
                    }}
                >
                    <span>Mathematics</span>
                    <span style={{fontSize: '1.5rem', fontWeight: 700}}>&rsaquo;</span>
                </MenuItem>

                <MenuItem
                    onMouseEnter={() => {
                        setHoveredSubject('science');
                        setMathBg('white');
                        setScienceBg('rgb(0, 161, 113)');
                    }}
                    bg={scienceBg}
                    onClick={() => {
                        history.push('/subject/science');
                        setSubject('science');
                        unsetCourse();
                        unsetLesson();
                        closeSubjectMenu();
                    }}
                >
                    <span>Science</span>
                    <span style={{fontSize: '1.5rem', fontWeight: 700}}>&rsaquo;</span>
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

export default withRouter(connect(null, mapDispatchToProps)(SubjectMenu));
