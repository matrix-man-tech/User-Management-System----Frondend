import React from 'react'
import { useSelector } from 'react-redux'

import PriNav2 from './Private/PriNav2'
import P2 from './Public/P2'

function Navbar() {
    const state = useSelector(state => state.users)
    const { userAuth } = state;
    return (
        <>
            {userAuth? (
                <PriNav2 isLogin={userAuth} />
            ) : <P2 />}
         
        </>
    )
}

export default Navbar
