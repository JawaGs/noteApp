import React, { Component } from 'react'
import './Note.css'

export default class Note extends Component {
    constructor(props) {
        super()
        this.noteContent = props.noteContent
        this.noteId = props.noteId
    }

    handleRemove( id ) { 
        this.props.removeNote( id)
     }

    render() {
        return (
            <div className='Note'>
                <span onClick={ () => this.handleRemove( this.noteId ) } >&times;</span>
                <p>{ this.noteContent }</p>
            </div>
        )
    }
}