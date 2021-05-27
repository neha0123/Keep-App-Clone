import React, { useState } from 'react'

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

 const CreateNote=(props)=> {
     const [expand,setExpand]=useState(false);
        const [note, setNote] = useState({
            title:'',
            content:'',
        });
        const inputEvent=(event)=>{
            const {name,value}=event.target;
            setNote((prevData)=>{
                return {
                    ...prevData,
                    [name]:value,
                }
                
        });
        console.log(note);
    };
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        })
    }
    const expandIt=()=>{
 setExpand(true);
    };
    
    const backNormal=()=>{
        setExpand(false)
    }
return(
        <>
            <div className="main_note">
<form>
{expand?
<input
 type="text"
  value={note.title}
   onChange={inputEvent} 
   name="title"
   placeholder="Title" 

   autoComplete="off"/> :null }

    <textarea rows=""
     value={note.content} 
     onChange={inputEvent}
     name="content"
     column=""
      placeholder="Write a note..."
        onClick={expandIt}
        onDoubleClick={backNormal}
      />
      {expand?
    <Button onClick={addEvent}><AddIcon className="plus_sign"/></Button>:null}

</form>
            </div>
        </>
    )}

export default CreateNote
