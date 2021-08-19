import React from 'react';


const LessonPage = ({ match }) => (
    <div>
        {match.params.lessonId}
    </div>
);

export default LessonPage;