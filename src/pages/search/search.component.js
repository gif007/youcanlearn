import React, { useEffect, useState } from 'react';

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
    SearchPageContainer,
    ResultContainer,
    LessonMediaWrapper,
    DetailsWrapper,
    ItemHeading,
    ItemSubheading,
    ParentSubject,
    ResultsHeading,
    ResultsContainer,
    ResultsList,
    CircleWrapper
} from './search.styles';

import { BannerWrapper } from '../../components/overview-banner/overview-banner.styles';
import { SearchForm } from '../../components/header/header.styles';
import { Circle } from '../../components/course-links/course-links.styles';

import SearchGlass from '../../assets/search.png';


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
            <BannerWrapper>
                <SearchForm stretch={true} action='/search'>
                    <fieldset>
                        <input type='search' name='q' id='search-bar' placeholder='Search lessons' />
                        <button type='submit'>
                            <img src={SearchGlass} alt='Search Glass' />
                        </button>
                    </fieldset>
                </SearchForm>
            </BannerWrapper>
            {
                results ? (
                    results.length > 0 ? (
                        <ResultsContainer>
                            <ResultsHeading>Results ({results.length})</ResultsHeading>
                            <ResultsList>
                                {results.map((result, index) => {
                                    return result.type === 'lesson' ? (
                                        <li key={index}>
                                            <ResultContainer to={result.url}>
                                                <LessonMediaWrapper src={result.media} />
                                                <DetailsWrapper>
                                                    <ItemHeading>{result.title}</ItemHeading>
                                                    <ItemSubheading>{result.type}</ItemSubheading>
                                                    <ParentSubject subject={result.subject}>{result.subject}</ParentSubject>
                                                </DetailsWrapper>
                                            </ResultContainer>
                                        </li>
                                    ) : (
                                        <li key={index}>
                                            <ResultContainer to={result.url}>
                                                <CircleWrapper>
                                                    <Circle
                                                        stretch={true}
                                                        subject={result.subject}
                                                    >
                                                        {result.title.slice(0, 1).toUpperCase()}
                                                    </Circle>
                                                </CircleWrapper>
                                                <DetailsWrapper>
                                                    <ItemHeading>{result.title}</ItemHeading>
                                                    <ItemSubheading>{result.type}</ItemSubheading>
                                                    <ParentSubject subject={result.subject}>{result.subject}</ParentSubject>
                                                </DetailsWrapper>
                                            </ResultContainer>
                                        </li>
                                    )
                                })}
                            </ResultsList>
                        </ResultsContainer>
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