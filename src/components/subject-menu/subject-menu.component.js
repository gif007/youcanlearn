import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';

import { selectIsCurriculumFetching } from '../../redux/curriculum/curriculum.selectors';

import {
    SubjectMenuWrapper,
    MenuArea,
    MenuItem,
    ContentArea,
    MobileMenuItem,
    MobileContentHeading
} from './subject-menu.styles';

import SubjectOutline from '../subject-outline/subject-outline.component';

import Spinner from '../spinner/spinner.component';



const SubjectMenu = ({ closeSubjectMenu, isLoading }) => {
    const [hoveredSubject, setHoveredSubject] = useState(1);
    const [mathBg, setMathBg] = useState('rgb(99, 181, 61)');
    const [scienceBg, setScienceBg] = useState('white');
    const [contentVisible, setContentVisible] = useState(false);
    const [subjectsVisible, setSubjectsVisible] = useState(true);

    return (
        <SubjectMenuWrapper>
            <MenuArea subjectsVisible={subjectsVisible}>
                <MobileMenuItem
                    onClick={() => {
                        setHoveredSubject(1);
                        setContentVisible(true);
                        setSubjectsVisible(false);
                    }}
                >
                    Mathematics
                    <span style={{fontWeight: 700}}>&rsaquo;</span>
                </MobileMenuItem>

                <MobileMenuItem
                    onClick={() => {
                        setHoveredSubject(2);
                        setContentVisible(true);
                        setSubjectsVisible(false);
                    }}
                >
                    Science
                    <span style={{fontWeight: 700}}>&rsaquo;</span>
                </MobileMenuItem>

                <MenuItem
                    onMouseEnter={() => {
                        setHoveredSubject(1);
                        setMathBg('rgb(99, 181, 61)');
                        setScienceBg('white');
                    }}
                    bg={mathBg}
                    onClick={() => {
                        closeSubjectMenu();
                    }}
                >
                    <Link to='/s/1'>
                        <span>Mathematics</span>
                        <span style={{fontSize: '1.5rem', fontWeight: 700}}>&rsaquo;</span>
                    </Link>
                </MenuItem>

                <MenuItem
                    onMouseEnter={() => {
                        setHoveredSubject(2);
                        setMathBg('white');
                        setScienceBg('rgb(0, 161, 113)');
                    }}
                    bg={scienceBg}
                    onClick={() => {
                        closeSubjectMenu();
                    }}
                >
                    <Link to='/s/2'>
                        <span>Science</span>
                        <span style={{fontSize: '1.5rem', fontWeight: 700}}>&rsaquo;</span>
                    </Link>
                </MenuItem>

            </MenuArea>
            <ContentArea subject={hoveredSubject} contentVisible={contentVisible}>
                {
                    isLoading ? <Spinner /> : (
                        <>
                            <MobileContentHeading onClick={() => {
                                setContentVisible(false);
                                setSubjectsVisible(true);
                            }}>
                                <div>&rsaquo;</div> All Subjects
                            </MobileContentHeading>
                            <SubjectOutline subjectId={hoveredSubject} />
                        </>
                    )
                }
            </ContentArea>
        </SubjectMenuWrapper>
    )
};

const mapDispatchToProps = dispatch => ({
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
});

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCurriculumFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectMenu);
