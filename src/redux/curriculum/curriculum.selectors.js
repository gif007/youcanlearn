import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


const selectCurriculum = state => state.curriculum;

export const selectIsCurriculumFetching = createSelector(
    [selectCurriculum],
    curriculum => curriculum.isFetching
);

export const selectCurriculumError = createSelector(
    [selectCurriculum],
    curriculum => curriculum.error
);

export const selectSubjects = createSelector(
    [selectCurriculum],
    curriculum => curriculum.subjects
);

// Gives you an array of objects
export const selectSubjectsAsArray = createSelector(
    [selectSubjects],
    subjects => subjects ? (
        Object.keys(subjects).map(key => subjects[key])
    ) : null
);

export const selectSubjectById = memoize((id) => (
    createSelector(
        [selectSubjectsAsArray],
        subjectsArray => subjectsArray ? (
            subjectsArray.filter(subject => subject.id.toString() === id)[0]
        ) : null
    )
));

export const selectCourses = createSelector(
    [selectCurriculum],
    curriculum => curriculum.courses
);

export const selectCoursesAsArray = createSelector(
    [selectCourses],
    courses => courses ? (
        Object.keys(courses).map(key => courses[key])
    ) : null
);

export const selectCourseById = memoize((id) => (
    createSelector(
        [selectCoursesAsArray],
        courseArray => courseArray ? (
            courseArray.filter(course => course.id.toString() === id)[0]
        ) : null
    )
));

export const selectCoursesBySubject = memoize((id) => (
    createSelector(
        [selectCoursesAsArray, selectSubjectsAsArray],
        (coursesArray, subjectsArray) => {
            if (subjectsArray == null || coursesArray === null) {
                return null;
            } else {
                const subject = subjectsArray.filter(subject => subject.id.toString() === id)[0];
                const courses = coursesArray.filter(course => subject.courses.includes(course.id));

                return courses;
            }
        }
    )
));

export const selectSections = createSelector(
    [selectCurriculum],
    curriculum => curriculum.sections
);

export const selectSectionsAsArray = createSelector(
    [selectSections],
    sections => sections ? (
        Object.keys(sections).map(key => sections[key])
    ) : null
);

export const selectSectionByLessonName = memoize((name) => (
    createSelector(
        [selectSectionsAsArray],
        sectionArray => sectionArray ? (
            sectionArray.filter(section => section.lessons.find())[0]
        ) : null
    )
));

export const selectLessons = createSelector(
    [selectCurriculum],
    curriculum => curriculum.lessons
);

export const selectLessonsAsArray = createSelector(
    [selectLessons],
    lessons => lessons ? (
        Object.keys(lessons).map(key => lessons[key])
    ) : null
);

export const selectLessonByName = memoize((name) => (
    createSelector(
        [selectLessonsAsArray],
        lessonsArray => lessonsArray ? (
            lessonsArray.filter(lesson => lesson.title === name)[0]
        ) : null
    )
));

// export const selectCourses = createSelector(
//     [selectSubjectsDataAsArray],
//     subjectsArray => {
//         let index = 1;
//         if (subjectsArray !== null) { 
//             const coursesArray = [];
//             subjectsArray.forEach(
//                 subject => subject.courses.forEach(
//                     course => {
//                         coursesArray.push(
//                             {
//                                 id: index,
//                                 type: 'course',
//                                 title: course.title,
//                                 url: encodeURI(`/subject/${subject.title}/${course.title}`),
//                                 subject: subject.title
//                             }
//                         );
//                         index++;
//                     }
//                 )
//             );
//             return coursesArray;
//         } else { return null; }
//     }
// );

// export const selectSections = createSelector(
//     [selectSubjectsDataAsArray],
//     subjectsArray => {
//         let index = 1;
//         if (subjectsArray !== null) { 
//             const sectionsArray = [];
//             subjectsArray.forEach(
//                 subject => subject.courses.forEach(
//                     course => course.sections.forEach(
//                         section => {
//                             sectionsArray.push({
//                                 id: index,
//                                 type: 'section',
//                                 title: section.title,
//                                 subject: subject.title,
//                                 course: course.title
//                             });
//                             index++;
//                         }
//                     )
//                 )
//             );
//             return sectionsArray;
//         } else { return null; }
//     }
// );

// export const selectLessons = createSelector(
//     [selectSubjectsDataAsArray],
//     subjectsArray => {
//         let index = 1;
//         if (subjectsArray !== null) { 
//             const lessonsArray = [];
//             subjectsArray.forEach(
//                 subject => subject.courses.forEach(
//                     course => course.sections.forEach(
//                         section => section.lessons.forEach(
//                             (lesson) => {
//                                 lessonsArray.push(
//                                     {
//                                         id: index,
//                                         type: 'lesson',
//                                         title: lesson.title,
//                                         subject: subject.title,
//                                         course: course.title,
//                                         section: section.title,
//                                         url: encodeURI(`/subject/${subject.title}/${course.title}/${lesson.title}`),
//                                         media: lesson.mediaUrl,
//                                         icon: lesson.iconUrl
//                                     }
//                                 );
//                                 index++;
//                             }
//                         )
//                     )
//                 )
//             );
//             return lessonsArray;
//         } else { return null; }
//     }
// );