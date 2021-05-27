import React, { useState } from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import CreateNote from './Component/CreateNote'
import Note from './Component/Note'
const App=()=> {
  const[addItem, setItem] = useState([]);
  const AddNote=(note)=>{
    setItem((predata)=>{
      return [...predata,note];
    });

    // alert('click');
  }
  const onDelete=(id)=>{
     setItem((oldData)=>
     oldData.filter((currentData,inde)=>{
return inde!==id;
     })
     )
  }
  return (
    <>
  <Header/>

<CreateNote passNote={AddNote}/>
{addItem.map((val,index)=>{
  return <Note
     key={index}
     id={index}
     title={val.title}
     content={val.content}
     delete={onDelete}
  />
})
}
<Footer/>
    </>
  );
}

export default App;
