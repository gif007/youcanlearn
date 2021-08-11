import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    updateSubject,
    updateCourse,
    updateLesson
} from '../../redux/location/location.actions';

import { selectSubjectsDataAsArray } from '../../redux/subjects/subjects.selectors';

import { withRouter } from 'react-router-dom';

import {
    BannerWrapper,
    SearchPageContainer
} from './search.styles';


const SearchPage = ({ history, unsetSubject, unsetCourse, unsetLesson, subjectsArray }) => {
    const params = new URLSearchParams(history.location.search);
    const query = params.get('q');
    const [allLessons, setAllLessons] = useState(null);
    const [results, setResults] = useState(null);

    useEffect(() => {
        unsetSubject();
        unsetCourse();
        unsetLesson();
    }, [unsetSubject, unsetCourse, unsetLesson])

    if (subjectsArray !== null && allLessons === null) {
        const lessonsArray = [];
        subjectsArray.forEach(
            subject => subject.courses.forEach(
                course => course.sections.forEach(
                    section => section.lessons.forEach(
                        lesson => lessonsArray.push(
                            {title: lesson.title, url: encodeURI(`/subject/${subject.title}/${course.title}/${lesson.title}`)}
                        )
                    )
                )
            )
        );
        setAllLessons(lessonsArray);
    }

    if (allLessons !== null && results === null) {
        const res = allLessons.filter((lesson) => lesson.title.toLowerCase().includes(query.toLowerCase()));
        setResults(res);
    }

    return (
        <SearchPageContainer>
            <BannerWrapper>Search</BannerWrapper>
            {
                results ? (
                    results.length > 0 ? (
                        <div>
                            <h1>Results:</h1>
                            <ul>
                            {results.map((result, index) => {
                                return <li key={index}><Link to={result.url}>{result.title}</Link></li>
                            })}
                            </ul>
                        </div>
                    ) : <div>Nothing found</div>
                ) : <div>Searching for <span style={{fontWeight: 700}}>{query}</span>...</div>
            }
        </SearchPageContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    unsetSubject: () => dispatch(updateSubject(null)),
    unsetCourse: () => dispatch(updateCourse(null)),
    unsetLesson: () => dispatch(updateLesson(null))
})

const mapStateToProps = createStructuredSelector({
    subjectsArray: selectSubjectsDataAsArray
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));