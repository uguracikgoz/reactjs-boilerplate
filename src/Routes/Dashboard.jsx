import React, { Component } from 'react'

import Header               from '../Template/Header'
import Content              from '../Template/Content'
import Footer               from '../Template/Footer'

class Dashboard extends Component
{
    render()
    {
        return(
            <>
                <Header/>
                <Content content="Dashboard"/>
                <Footer/>
            </>
        )
    }
}

export default Dashboard