import { createSelector } from "reselect";

const selectDropdowns = state => state.dropdowns;

export const selectIsSubjectMenuHidden = createSelector(
    [selectDropdowns],
    dropdowns => dropdowns.subjectMenu
);

export const selectIsHomeMenuHidden = createSelector(
    [selectDropdowns],
    dropdowns => dropdowns.homeMenu
);

export const selectIsSettingsMenuHidden = createSelector(
    [selectDropdowns],
    dropdowns => dropdowns.settingsMenu
);