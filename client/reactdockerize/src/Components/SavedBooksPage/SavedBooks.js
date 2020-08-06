import React,{useState,useEffect} from 'react';
import Navbar from "../NavbarComponent/Navbar"
import axios from 'axios'
function SavedBooks(props){
    const fetchData = () => {
        console.log(props.location.pathname)
        const uniqueId = props.location.pathname.split("/")[2]
        console.log(uniqueId)
        const mainCategoriesApiEndPoint = 'http://localhost:8050/api/v1/user/'+uniqueId+'/books'
        axios.get(mainCategoriesApiEndPoint)
        .then(response => response.data)
        .then((data) => {
            console.log(data);
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
        return(
            <div>
<h1>This is saved books </h1>
            </div>
        )
    }

export default SavedBooks;