import React from 'react'
import {Component} from 'react';


export default class Upload extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h3 className="upload-heading">Upload Book</h3>
                <form className="upload-form">
                    <label for = "name" className = "upload-label"> Book Name</label>
                    <input id = "name" type = "text" name = "name" className = "upload-input"/>
                    <label for = "book-image" className = "upload-label"> Book Image</label>
                    <input id = "book-image" type = "file" name = "filename" className = "upload-input"/>
                    <label for = "isbn" className = "upload-label"> ISBN</label>
                    <input id = "isbn" type = "text" name = "isbn" className = "upload-input"/>
                    <label for = "category" className = "upload-label"> Category</label>
                    <select name ="category" id = "category" className="upload-input">
                        <option value="educational">Educational</option>
                        <option value="fictional">Fictional</option>
                        <option value="personal">Personal Development</option>
                        <option value="other">Other</option>
                    </select>
                    <label for = "description" className = "upload-label"> Description</label>
                    <textarea name = "description" className = "upload-input"></textarea>
                    <label for = "author" className = "upload-label"> Author</label>
                    <input id = "author" type = "text" name = "author" className = "upload-input"/>
                    <label for = "publisher" className = "upload-label"> Publisher</label>
                    <input id = "publisher" type = "text" name = "publisher" className = "upload-input"/>
                    <label for = "format" className = "upload-label"> Format</label>
                    <select name ="format" id = "format" className="upload-input">
                        <option value="audio">Audio(MP3)</option>
                        <option value="pdf">PDF</option>
                        <option value="other">Other</option>
                    </select>
                    <label for = "Choose Book" className = "upload-label"> Choose Book</label>
                    <input id = "choose-book" type = "file" name = "bookfilename" className = "upload-input"/>
                    <button type="submit" className="upload-button">Upload</button>
                </form>
            </div>
        )
    }
    
}