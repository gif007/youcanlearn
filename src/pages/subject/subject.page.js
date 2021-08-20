import React from 'react';

import { connect } from 'react-redux';
import {
    selectIsCurriculumFetching
} from '../../redux/curriculum/curriculum.selectors';
import { createStructuredSelector } from 'reselect';

import Spinner from '../../components/spinner/spinner.component';

import SubjectOverview from '../../components/subject-overview/subject-overview.component';
import SubjectBanner from '../../components/subject-banner/subject-banner.component';


const SubjectPage = ({ match, isLoading }) => {
    const subjectId = match.params.subjectId;
    return isLoading ? <Spinner />  : (
        <div>
            <SubjectBanner subjectId={subjectId} />
            <SubjectOverview subjectId={subjectId} />
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCurriculumFetching
})

export default connect(mapStateToProps)(SubjectPage);