
import axios from 'axios';
import React, {useState, Component, useEffect } from 'react'
import ReactDom from 'react-dom';
 
 
const Fetchtable = () =>{
    const [txt, setTxt] = useState("");
    const [users, setUsers] = useState([]);
   

    const inputSearch=(event) =>{
      setTxt( event.target.value);

    }
    
    const SearchBtn = async () => {
        setTxt(txt)
        console.log(txt);
        const url = "http://65.0.216.210:5000/search/people?query={query}".replace("{query}",txt)
        console.log(url)
        
    
        const response = await  fetch(url,
               {method :'GET',
                headers:{
                    'Accept': 'Application/json',
                    'content-type' : 'Application/json',
                    'userId': 'web_user',
                    'auth': 'we-are-metby'
                }
            }) 
            //   console.log(response.json())
        if(response.ok){
            const user = await response.json();
            console.log(user);
            console.log(txt);
            // console.log(user.records[0].name);
            // console.log(user.records.length);
            setUsers({user});
        }
          
       
   }
    

    return (
        
            <div>
                <input type="text" onChange={inputSearch} placeholder="Enter name here..." />
                <button onClick={SearchBtn}>Search</button>
            </div>
           
            )
    
}

export default Fetchtable;
