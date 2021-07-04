import React, { Component } from 'react';
import axios  from 'axios';


export class App extends Component {

    
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event =>{
       this.setState({
           selectedFile: event.target.files[0],
       })
       console.log(event.target.files[0]);
      
    }
    
    
    fileUploadHandler = () =>{
        const formData = new FormData();
        formData.append('IMAGE',this.state.selectedFile);
       
        console.log(formData);
        axios.post("http://65.0.211.194:8082/api/v1/upload/bulk/files?contentType=IMAGE&entityId=2cdab72c20ed47eda71c8f4c8818c520&entityType=POST&isThumbnailNeeded=true",
         formData, { headers:{
                    
                    'auth': 'dont_delete_user',
                    'Content-Type' : 'multipart/form-data'
                    
                }}
               
              )
        .then(res => {
            // url="http://google.com"
            console.log(res);
        }).catch(error =>{
            console.log(error);
        })
    }
    render() {
        return (<>
            <div>
              <input type="file" onChange={this.fileSelectedHandler}/>
              <button onClick={this.fileUploadHandler}>Upload</button> 
               
            </div>
          
            </>
        )
    }
}

export default App;


