import DropdownsActionTypes from "./dropdowns.types";


export const toggleSubjectMenuHidden = () => ({
    type: DropdownsActionTypes.TOGGLE_SUBJECT_MENU
});

export const closeSubjectMenu = () => ({
    type: DropdownsActionTypes.CLOSE_SUBJECT_MENU
});

export const toggleHomeMenuHidden = () => ({
    type: DropdownsActionTypes.TOGGLE_HOME_MENU
});

export const toggleSettingsMenuHidden = () => ({
    type: DropdownsActionTypes.TOGGLE_SETTINGS_MENU
});