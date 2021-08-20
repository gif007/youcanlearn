import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {
    selectLessonsAsArray,
    selectCoursesAsArray,
    selectSectionsAsArray,
    selectSubjectsAsArray
} from '../../redux/curriculum/curriculum.selectors';

import { addCollectionAndDocuments } from '../../firebase/firebase.utils';


const DataDumpPage = ({ courses, lessons, sections, subjects }) => {
    // useEffect(() => {
    //     addCollectionAndDocuments('subjects', subjects);
    // }, [])
    
    return (
        <div style={{minHeight: '400px', background: 'white', borderTop: '80px solid lightgrey'}}>
            Now processing: Subjects
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    courses: selectCoursesAsArray,
    lessons: selectLessonsAsArray,
    sections: selectSectionsAsArray,
    subjects: selectSubjectsAsArray
})

export default connect(mapStateToProps)(DataDumpPage);