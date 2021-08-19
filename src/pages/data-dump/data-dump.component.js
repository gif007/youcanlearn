import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectLessons, selectCourses, selectSections } from '../../redux/curriculum/curriculum.selectors';


const DataDumpPage = ({ allCourses, allLessons, allSections }) => {
    
    return (
        <div>
            <h2>ALL_COURSES = {"{"}</h2><br />
            {allCourses ? (<ul>
                {
                    allCourses.map((course, index) => {
                        const relevantSections = allSections.filter(section => section.course === course.title);
                        return (
                            <li key={index}>
                                &nbsp;&nbsp;&nbsp;&nbsp;"{course.title}": {"{"} <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: {course.id},<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: "{course.type}",<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: "{course.title}",<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subject: {course.subject === 'math' ? 1 : 2},<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sections: [{relevantSections.map(section => section.id + ', ')}]<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;{"}"},<br /><br />
                            </li>
                        )
                    })
                }
            </ul>) : null}
            <div>{"}"}</div>
            <br /><br />


            <h2>const ALL_SECTIONS = {"{"}</h2><br />
            {allSections ? (<ul>
                {
                    allSections.map((section, index) => {
                        const relevantLessons = allLessons.filter(lesson => lesson.section === section.title);
                        return (
                            <li key={index}>
                                &nbsp;&nbsp;&nbsp;&nbsp;"{section.title}": {"{"} <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: {section.id},<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: "{section.type}",<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: "{section.title}",<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subject: {section.subject === 'math' ? 1 : 2},<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;course: {allCourses.filter(course => course.title === section.course)[0]['id']},<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lessons: [{relevantLessons.map(section => section.id + ', ')}]<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;{"}"},<br /><br />
                            </li>
                        )
                    })
                }
            </ul>) : null}
            <div>{"}"}</div>
            <br /><br />


            <h2>const ALL_LESSONS = {"{"}</h2><br />
            {allLessons ? (<ul>
                {
                    allLessons.map((lesson, index) => {

                        return (
                            <li key={index}>
                                &nbsp;&nbsp;&nbsp;&nbsp;"{lesson.title}": {"{"} <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: {lesson.id},<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: "{lesson.type}",<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: "{lesson.title}",<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subject: {lesson.subject === 'math' ? 1 : 2},<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;course: {allCourses.filter(course => course.title === lesson.course)[0]['id']},<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;section: {allSections.filter(section => section.title === lesson.section)[0]['id']},<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mediaUrl: "{lesson.media}",<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iconUrl: "{lesson.icon}"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;{"}"},<br /><br />
                            </li>
                        )
                    })
                }
            </ul>) : null}
            <div>{"}"}</div>
            <br /><br />
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    allCourses: selectCourses,
    allLessons: selectLessons,
    allSections: selectSections
})

export default connect(mapStateToProps)(DataDumpPage);