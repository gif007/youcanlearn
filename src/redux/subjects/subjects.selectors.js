import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


const selectSubjects = state => state.subjects;

export const selectSubjectsData = createSelector(
    [selectSubjects],
    subjects => subjects.data
);

export const selectSubjectsIsFetching = createSelector(
    [selectSubjects],
    subjects => subjects.isFetching
);

export const selectSubjectsError = createSelector(
    [selectSubjects],
    subjects => subjects.error
);

export const selectSubjectsDataAsArray = createSelector(
    [selectSubjectsData],
    data => data ? (
        Object.keys(data).map(key => data[key])
    ) : null
);

export const selectSubject = memoize((subject) => (
    createSelector(
        [selectSubjectsData],
        data => data ? data[subject] : null
    )
));

export const selectCourses = createSelector(
    [selectSubjectsDataAsArray],
    subjectsArray => {
        if (subjectsArray !== null) { 
            const coursesArray = [];
            subjectsArray.forEach(
                subject => subject.courses.forEach(
                    course => coursesArray.push(
                        {type: 'course', title: course.title, url: encodeURI(`/subject/${subject.title}/${course.title}`)}
                    )
                )
            );
            return coursesArray;
        } else { return null; }
    }
);

export const selectLessons = createSelector(
    [selectSubjectsDataAsArray],
    subjectsArray => {
        if (subjectsArray !== null) { 
            const lessonsArray = [];
            subjectsArray.forEach(
                subject => subject.courses.forEach(
                    course => course.sections.forEach(
                        section => section.lessons.forEach(
                            lesson => lessonsArray.push(
                                {type: 'lesson', title: lesson.title, url: encodeURI(`/subject/${subject.title}/${course.title}/${lesson.title}`)}
                            )
                        )
                    )
                )
            );
            return lessonsArray;
        } else { return null; }
    }
);