import React from 'react';

import { SelectorWrapper } from './language-selector.styles';


const LanguageSelector = () => (
    <SelectorWrapper>
        <select onChange={() => alert('Not yet implemented')}>
            <option>English</option>
            <option>Swedish</option>
            <option>French</option>
            <option>German</option>
            <option>Mandarin</option>
            <option>Arabic</option>
        </select>
    </SelectorWrapper>
);

export default LanguageSelector;