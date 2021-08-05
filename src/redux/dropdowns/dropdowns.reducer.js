import DropdownsActionTypes from "./dropdowns.types";

const INITIAL_STATE = {
    subjectMenu: true,
    homeMenu: true,
    settingsMenu: true
};


const dropdownsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case DropdownsActionTypes.TOGGLE_SUBJECT_MENU:
            return {
                ...state,
                subjectMenu: !state.subjectMenu
            };
        case DropdownsActionTypes.CLOSE_SUBJECT_MENU:
            return {
                ...state,
                subjectMenu: true
            };
        case DropdownsActionTypes.TOGGLE_HOME_MENU:
            return {
                ...state,
                homeMenu: !state.homeMenu
            };
        case DropdownsActionTypes.TOGGLE_SETTINGS_MENU:
            return {
                ...state,
                settingsMenu: !state.settingsMenu
            }
        default: {
            return state;
        }
    }
};

export default dropdownsReducer;