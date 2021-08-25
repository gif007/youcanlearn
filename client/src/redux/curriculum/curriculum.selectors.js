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
            subjectsArray.filter(subject => subject.id.toString() === id.toString())[0]
        ) : null
    )
));

export const selectSubjectByCourse = memoize((id) => (
    createSelector(
        [selectSubjectsAsArray, selectCoursesAsArray],
        (subjectsArray, coursesArray) => {
            if (subjectsArray == null || coursesArray === null) {
                return null;
            } else {
                const course = coursesArray.filter(course => course.id.toString() === id.toString())[0];
                const subject = subjectsArray.filter(subject => subject.id === course.subject)[0];

                return subject;
            }
        }
    )
));

export const selectSubjectByLesson = memoize((id) => (
    createSelector(
        [selectSubjectsAsArray, selectLessonsAsArray],
        (subjectsArray, lessonsArray) => {
            if (subjectsArray == null || lessonsArray === null) {
                return null;
            } else {
                const lesson = lessonsArray.filter(lesson => lesson.id.toString() === id.toString())[0];
                const subject = subjectsArray.filter(subject => subject.id === lesson.subject)[0];

                return subject;
            }
        }
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
            courseArray.filter(course => course.id.toString() === id.toString())[0]
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
                const subject = subjectsArray.filter(subject => subject.id.toString() === id.toString())[0];
                const courses = coursesArray.filter(course => subject.courses.includes(course.id));

                return courses;
            }
        }
    )
));

export const selectCourseByLesson = memoize((id) => (
    createSelector(
        [selectCoursesAsArray, selectLessonsAsArray],
        (coursesArray, lessonsArray) => {
            if (coursesArray == null || lessonsArray === null) {
                return null;
            } else {
                const lesson = lessonsArray.filter(lesson => lesson.id.toString() === id.toString())[0];
                const course = coursesArray.filter(course => course.id === lesson.course)[0];

                return course;
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

export const selectSectionById = memoize((id) => (
    createSelector(
        [selectSectionsAsArray],
        sectionArray => sectionArray ? (
            sectionArray.filter(section => section.id.toString() === id.toString())[0]
        ) : null
    )
));

export const selectSectionsByCourse = memoize((id) => (
    createSelector(
        [selectSectionsAsArray, selectCoursesAsArray],
        (sectionsArray, coursesArray) => {
            if (sectionsArray == null || coursesArray === null) {
                return null;
            } else {
                const course = coursesArray.filter(course => course.id.toString() === id.toString())[0];
                const sections = sectionsArray.filter(section => course.sections.includes(section.id));

                return sections;
            }
        }
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

export const selectLessonById = memoize((id) => (
    createSelector(
        [selectLessonsAsArray],
        lessonArray => lessonArray ? (
            lessonArray.filter(lesson => lesson.id.toString() === id.toString())[0]
        ) : null
    )
));

export const selectLessonsBySection = memoize((id) => (
    createSelector(
        [selectSectionsAsArray, selectLessonsAsArray],
        (sectionsArray, lessonsArray) => {
            if (sectionsArray == null || lessonsArray === null) {
                return null;
            } else {
                const section = sectionsArray.filter(section => section.id.toString() === id.toString())[0];
                const lessons = lessonsArray.filter(lesson => section.lessons.includes(lesson.id));

                return lessons;
            }
        }
    )
));
