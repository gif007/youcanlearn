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

export const selectIsSearchMenuHidden = createSelector(
    [selectDropdowns],
    dropdowns => dropdowns.searchMenuHidden
);

export const selectIsModalUp = createSelector(
    [selectDropdowns],
    dropdowns => dropdowns.isModalUp
);