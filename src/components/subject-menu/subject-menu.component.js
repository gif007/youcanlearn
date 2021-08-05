import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSubject } from '../../redux/location/location.actions';
import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';

import {
    SubjectMenuWrapper,
    MenuArea,
    MenuItem,
    ContentArea
} from './subject-menu.styles';

import SubjectOutline from '../subject-outline/subject-outline.component';


const SubjectMenu = ({ closeSubjectMenu, history, setSubject }) => {
    const [currentSubject, setCurrentSubject] = useState('math');
    const [mathBg, setMathBg] = useState('rgb(99, 181, 61)');
    const [scienceBg, setScienceBg] = useState('white');

    return (
        <SubjectMenuWrapper onClick={(e) => e.stopPropagation()}>
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
                        setSubject('math');
                        closeSubjectMenu();
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
                        setSubject('science');
                        closeSubjectMenu();
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

const mapDispatchToProps = dispatch => ({
    setSubject: (subject) => dispatch(updateSubject(subject)),
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
});

export default withRouter(connect(null, mapDispatchToProps)(SubjectMenu));
