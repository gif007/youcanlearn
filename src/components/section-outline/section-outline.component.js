import React from 'react';

import { connect } from 'react-redux';

import {
    selectSectionsByCourse
} from '../../redux/curriculum/curriculum.selectors';

import SectionItem from '../section-item/section-item.component';

import { SectionList } from './section-outline.styles';

const SectionOutline = ({ sections }) => {

    return (
        <SectionList>
            {
                sections.map((section, index) => {
                    return (
                        <li key={index}>
                            <SectionItem sectionId={section.id} />
                        </li>
                    )
                })
            }
        </SectionList>
    )
}

const mapStateToProps = (state, ownProps) => ({
    sections: selectSectionsByCourse(ownProps.courseId)(state)
});
export default connect(mapStateToProps)(SectionOutline);