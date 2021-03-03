import React from 'react';

export function Icons({name, color, size, className}) {

    return(
        <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size}>>
            <use xlinkHref={`#${name}`} />
        </svg>
    )
}