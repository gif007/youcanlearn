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

export const closeHomeMenu = () => ({
    type: DropdownsActionTypes.CLOSE_HOME_MENU
});

export const toggleSettingsMenuHidden = () => ({
    type: DropdownsActionTypes.TOGGLE_SETTINGS_MENU
});

export const closeSettingsMenu = () => ({
    type: DropdownsActionTypes.CLOSE_SETTINGS_MENU
});
