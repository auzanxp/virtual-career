import React from 'react';

const Heading = ({ className, title, ...props }) => {
    return (
        <>
            <h1 className={`${className} text-gray-900 capitalize font-medium text-${props.size}`}>
                {title}
            </h1>
        </>
    );
};

Heading.defaultProps = {
    size: '2xl',
};

export default Heading;
