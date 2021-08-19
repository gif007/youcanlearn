import React from 'react';

import { connect } from 'react-redux';
import {
    selectIsCurriculumFetching
} from '../../redux/curriculum/curriculum.selectors';
import { createStructuredSelector } from 'reselect';

import Spinner from '../../components/spinner/spinner.component';

import SubjectComponent from './subject.component';



const SubjectPage = ({ match, isLoading }) => {

    return (
        <div style={{minHeight: '600px', background: 'white', borderTop: '60px solid blue'}}>
            {isLoading ? <Spinner /> : <SubjectComponent subjectId={match.params.subjectId}/>}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCurriculumFetching
})

export default connect(mapStateToProps)(SubjectPage);