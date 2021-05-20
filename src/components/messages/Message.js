import React from 'react';
import { CAlert } from '@coreui/react';

const Message = ({ color, message }) => {
    return (
        <CAlert color={color}>
            {message}
        </CAlert>
    )
}

Message.defaultProps = {
    color: 'primary'
}

export default Message
