import DropdownsActionTypes from "./dropdowns.types";

const INITIAL_STATE = {
    subjectMenuHidden: true,
    homeMenuHidden: true,
    settingsMenuHidden: true
};


const dropdownsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case DropdownsActionTypes.TOGGLE_SUBJECT_MENU:
            return {
                ...state,
                subjectMenuHidden: !state.subjectMenuHidden
            };
        case DropdownsActionTypes.CLOSE_SUBJECT_MENU:
            return {
                ...state,
                subjectMenuHidden: true
            };
        case DropdownsActionTypes.TOGGLE_HOME_MENU:
            return {
                ...state,
                homeMenuHidden: !state.homeMenuHidden
            };
        case DropdownsActionTypes.CLOSE_HOME_MENU:
            return {
                ...state,
                homeMenuHidden: true
            };
        case DropdownsActionTypes.TOGGLE_SETTINGS_MENU:
            return {
                ...state,
                settingsMenuHidden: !state.settingsMenuHidden
            };
        case DropdownsActionTypes.CLOSE_SETTINGS_MENU:
            return {
                ...state,
                settingsMenuHidden: true
            };
        default: {
            return state;
        }
    }
};

export default dropdownsReducer;