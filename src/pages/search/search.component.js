import React, { useState } from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {
    selectCoursesAsArray,
    selectLessonsAsArray
} from '../../redux/curriculum/curriculum.selectors';

import { withRouter } from 'react-router-dom';

import {
    SearchPageContainer,
    ResultContainer,
    LessonMediaWrapper,
    MobileLessonMediaWrapper,
    DetailsWrapper,
    ItemHeading,
    ItemSubheading,
    ParentSubject,
    ResultsHeading,
    ResultsContainer,
    ResultsList,
    CircleWrapper,
    IconWrapper
} from './search.styles';

import { BannerWrapper } from '../../components/overview-banner/overview-banner.styles';
import { SearchForm } from '../../components/header/header.styles';
import { Circle } from '../../components/course-links/course-links.styles';

import SearchGlass from '../../assets/search.png';


const SearchPage = ({ history, courses, lessons }) => {

    const params = new URLSearchParams(history.location.search);
    const query = params.get('q');

    const [results, setResults] = useState(null);

    if (lessons !== null && courses !== null && results === null) {
        let res = lessons.filter((lesson) => lesson.title.toLowerCase().includes(query.toLowerCase()));
        res = res.concat(courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase())));
        setResults(res);
    }

    const subjectsMap = {
        '1': 'Math',
        '2': 'Science'
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
                                            <ResultContainer to={`/l/${result.id}`}>
                                                <LessonMediaWrapper src={result.mediaUrl} />
                                                <MobileLessonMediaWrapper>
                                                    <IconWrapper subject={result.subject}>
                                                        <img src={result.iconUrl} alt={result.title}/>
                                                    </IconWrapper>
                                                </MobileLessonMediaWrapper>
                                                <DetailsWrapper>
                                                    <ItemHeading>{result.title}</ItemHeading>
                                                    <ItemSubheading>{result.type}</ItemSubheading>
                                                    <ParentSubject subject={result.subject}>{subjectsMap[result.subject]}</ParentSubject>
                                                </DetailsWrapper>
                                            </ResultContainer>
                                        </li>
                                    ) : (
                                        <li key={index}>
                                            <ResultContainer to={`/c/${result.id}`}>
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
                                                    <ParentSubject subject={result.subject}>{subjectsMap[result.subject]}</ParentSubject>
                                                </DetailsWrapper>
                                            </ResultContainer>
                                        </li>
                                    )
                                })}
                            </ResultsList>
                        </ResultsContainer>
                    ) : <div style={{textAlign: 'center', marginTop: '3rem', fontSize: '1.5rem'}}>Nothing found</div>
                ) : <div style={{textAlign: 'center', marginTop: '3rem', fontSize: '1.5rem'}}>Searching for <span style={{fontWeight: 700}}>{query ? query.toLowerCase() : 'everything'}</span>...</div>
            }
        </SearchPageContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    courses: selectCoursesAsArray,
    lessons: selectLessonsAsArray
});

export default withRouter(connect(mapStateToProps)(SearchPage));