import SUBJECTS from "../../data/subjects";

const INITIAL_STATE = SUBJECTS;

const subjectsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default subjectsReducer;