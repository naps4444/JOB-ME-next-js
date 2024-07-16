// import React from 'react'
// import { useEffect, useState } from 'react'
// import Cookies from 'js-cookie'
// import { useRouter } from 'next/router'

// const withAuth = (WrappedComponent) => {
//     return(props) => {
//         const router = useRouter();
//         const [loading, setLoading] = useState(true);
//         const [isAuthenticated, setIsAuthenticated] = useState(false);

//         useEffect(() => {
//             const token = Cookies.get('token');
//             if(!token){
//                 router.push('/login')
//             } else {
//                 setIsAuthenticated(true)
//             }
//             setLoading(false)
//         }, [router])

//         if(loading){
//             return <div>loading...</div>
//         }
//         return isAuthenticated ? <WrappedComponent {...props} /> : null;

//     }
// }

// export default withAuth

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            const token = Cookies.get('token');
            if (!token) {
                router.push('/login');
            } else {
                setIsAuthenticated(true);
            }
            setLoading(false);
        }, [router]);

        if (loading) {
            return <div>Loading...</div>;
        }
        return isAuthenticated ? <WrappedComponent {...props} /> : null;
    };

    AuthComponent.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

    return AuthComponent;
};

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;
