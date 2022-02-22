import React, { useState } from 'react'
import ModuleZeroDrawer from './ModuleZeroDrawer'

const CustomDrawer = ({ props, module, setModule }) => {

    console.log("in custom drawer " + module)

    return (
        <>
            {
                module == 0 ?
                    <ModuleZeroDrawer {...props} />
                    : <></>
            }

        </>
    )
}


export default CustomDrawer