import React from 'react';
import { CSpinner } from '@coreui/react';

const ButtonLoader = () => {
    return (
        <CSpinner
            size="sm"
            style={{
                width: '1rem',
                height: '1rem',
                marginLeft: '7px'
            }}
        />
    )
}

export default ButtonLoader
