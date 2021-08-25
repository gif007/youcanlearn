import React from 'react';

import { connect } from 'react-redux';

import { selectSubjectById } from '../../redux/curriculum/curriculum.selectors';

import {
    BannerWrapper,
    PlainText
} from './subject-banner.styles';


const SubjectBanner = ({ subject }) => {

    return (
    <BannerWrapper subject={subject.title}>
        <PlainText>{subject.title}</PlainText>
    </BannerWrapper>
)};

const mapStateToProps = (state, ownProps) => ({
    subject: selectSubjectById(ownProps.subjectId)(state)
});

export default connect(mapStateToProps)(SubjectBanner);