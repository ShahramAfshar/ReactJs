import React from 'react'
import '../StyleSheets/myStyle.css';

export default function StyleSheet(props) {
    let className = props.primary ? 'primary' : '';
    const inlineStyle = {    
            fontSize: 50,
            backgroundColor: 'red',
     }
    const { primary } = props;

    return (
        <div>
            <p className={className + ' font-xl'}>{primary} Style Sheet</p>
            <p style={inlineStyle}>Test Inline Style</p>
        </div>
    )
}
