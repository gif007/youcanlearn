import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    updateSubject,
    updateCourse,
    updateLesson
} from '../../redux/location/location.actions';

import { selectCourses, selectLessons } from '../../redux/subjects/subjects.selectors';

import { withRouter } from 'react-router-dom';

import {
    BannerWrapper,
    SearchPageContainer
} from './search.styles';


const SearchPage = ({ history, unsetSubject, unsetCourse, unsetLesson, allCourses, allLessons }) => {

    const params = new URLSearchParams(history.location.search);
    const query = params.get('q');

    const [results, setResults] = useState(null);

    useEffect(() => {
        unsetSubject();
        unsetCourse();
        unsetLesson();
    }, [unsetSubject, unsetCourse, unsetLesson])

    if (allLessons !== null && allCourses !== null && results === null) {
        let res = allLessons.filter((lesson) => lesson.title.toLowerCase().includes(query.toLowerCase()));
        res = res.concat(allCourses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase())));
        setResults(res);
    }

    return (
        <SearchPageContainer>
            <BannerWrapper>Search lessons</BannerWrapper>
            {
                results ? (
                    results.length > 0 ? (
                        <div>
                            <h1>Results:</h1>
                            <ul>
                                {results.map((result, index) => {
                                    return <li key={index}><Link to={result.url}>{result.title} - {result.type}</Link></li>
                                })}
                            </ul>
                        </div>
                    ) : <div>Nothing found</div>
                ) : <div>Searching for <span style={{fontWeight: 700}}>{query.toLowerCase()}</span>...</div>
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
    allCourses: selectCourses,
    allLessons: selectLessons
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));