import React, { Component } from 'react';

import Header               from '../Template/Header.jsx'
import Content              from '../Template/Content.jsx'
import Footer               from '../Template/Footer.jsx'

class Page404 extends Component
{
  render()
  {
    return(
        <>
            <Header/>
            <Content content="Page404"/>
            <Footer/>
        </>
    )
  }
}

export default Page404