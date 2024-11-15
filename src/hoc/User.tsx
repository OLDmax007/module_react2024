import React, { ReactNode } from 'react';

interface UserProps {
    children: ReactNode;
}

const User: React.FC<UserProps> = ({ children }) => {
    console.log('USER');

    return (
        <div>
            {children}
        </div>
    );
};

export default User;