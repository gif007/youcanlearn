import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';

import {
    SubjectMenuWrapper,
    MenuArea,
    MenuItem,
    ContentArea
} from './subject-menu.styles';

import SubjectOutline from '../subject-outline/subject-outline.component';


const SubjectMenu = ({ closeSubjectMenu}) => {
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
                    onClick={() => closeSubjectMenu()}
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
                    onClick={() => closeSubjectMenu()}
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
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
});

export default connect(null, mapDispatchToProps)(SubjectMenu);
