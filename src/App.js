import React, { Component } from 'react';
import axios from 'axios';


export class App extends Component {

    
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event =>{
       this.setState({
           selectedFile: event.target.files[0]
       })
       console.log(event.target.files[0]);
    }
    fileUploadHandler = () =>{
        const fd = new FormData();
        fd.append('image',this.state.selectedFile, this.state.selectedFile.name);
        axios.post("api/v1/upload/bulk/files?contentType=IMAGE&entityId=2cdab72c20ed47eda71c8f4c8818c520&entityType=POST&isThumbnailNeeded=true",
         fd, { headers:{
                    
                    
                    'Content-Type' : 'multipart/form-data',
                    'auth': 'dont_delete_user'
                }},
                {body:{
                       'files': 'user_icon.png'
                }})
        .then(res => {
            // url="http://google.com"
            console.log(res);
        });
    }
    render() {
        return (<>
            <div>
              <input type="file" onChange={this.fileSelectedHandler}/>
              {/* <label>Tag</label>
              <input type="text"></input> */}
              
              <button onClick={this.fileUploadHandler}>Upload</button> 
               
            </div>
          
            </>
        )
    }
}

export default App;


