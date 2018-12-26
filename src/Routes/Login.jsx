import React, { Component } from 'react'

import Content              from '../Template/Content'
import Footer               from '../Template/Footer'

class Login extends Component
{
    render()
    {
        return(
            <>
                <Content content="Login"/>
                <Footer/>
            </>
        )
    }
}

export default Login