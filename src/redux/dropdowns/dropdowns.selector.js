import { createSelector } from "reselect";

const selectDropdowns = state => state.dropdowns;

export const selectIsSubjectMenuHidden = createSelector(
    [selectDropdowns],
    dropdowns => dropdowns.subjectMenuHidden
);

export const selectIsHomeMenuHidden = createSelector(
    [selectDropdowns],
    dropdowns => dropdowns.homeMenuHidden
);

export const selectIsSettingsMenuHidden = createSelector(
    [selectDropdowns],
    dropdowns => dropdowns.settingsMenuHidden
);