import React, { Component } from 'react'

class Content extends Component
{
    render()
    {
        var Contents = require('../Contents/' + this.props.content + '/' + this.props.content + '.jsx').default
        return(
            <>
                 <Contents/>
            </>
        )
    }
}

export default Content