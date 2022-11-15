import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Create from "@mui/icons-material/Create"
import InputOption from './InputOption'
import Image from "@mui/icons-material/Image"
import Subscriptions from "@mui/icons-material/Subscriptions"
import EventNote from "@mui/icons-material/EventNote"
import CalendarViewDay from "@mui/icons-material/CalendarViewDay"
import Post from './Post'
import { db } from './firebase'
import { collection, onSnapshot ,doc , serverTimestamp , addDoc , setDoc } from "firebase/firestore";
import  { nanoid } from "nanoid"



function Feed() {

  // const id = nanoid()
  const [ posts , setPosts ] = useState([])
  const [ input , setInput ] = useState("")

    useEffect(()=>{
      const getChats = ()=> {
        const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
          setPosts(
            snapshot.docs.map((doc)=>({
              id:doc.id,
              data:doc.data()
            }))
          )
  // ...
});

      return () => {
        unsub();
      };
      }

      return()=> {
        getChats()
      }


  }, [posts]);

    console.log(input)

  
  
  const sendPost = async (e) => {
      e.preventDefault()

// Add a new document in collection "cities"
  await addDoc(collection(db, "posts"), {
    name: "Avre enahoroooooooo",
    description: "This is a firebase test",
    message:input,
    photoURL:"",
    timestamp: serverTimestamp()


});

  setInput("")

  console.log(input)
  }

  return (
    <div className='feed'>
      
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <Create/>
                <form>
                    <input type="text" value={input} onChange={e=> setInput(e.target.value)}/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
              <InputOption Icon={Image} title='Photo' color="#70B5F9"/>
              <InputOption Icon={Subscriptions} title='Video' color="#E7A33E"/>
              <InputOption Icon={EventNote} title='Event' color="#C0CBCD"/>
              <InputOption Icon={CalendarViewDay} title='Write Article' color="#7FC15E"/>
            </div>
        </div>

        {/* post  */}
        {posts.map(({id , data: {name , description , message, photoURL}})=>(
          <Post 
          key={id}
          name={name} 
          description={description} 
          message={message}
          photoURL={photoURL}
        />
        ))}

        {/* <Post 
          name='Enahoro avre' 
          description='A description is not needed here' 
          message='Wow !! This worked'
        /> */}
        
    </div>
  )
}

export default Feed

//   //   const unsub = onSnapshot(collection(db, "posts"), () => 
//   // setPosts(({
//   // // Respond to data
//   // // ...
//   //   id:doc.id,
//   //   data:doc.data()
//   // })));

//   const unsub = onSnapshot(doc(db, "posts", "SF"), (doc) => {
//     console.log("Current data: ", doc.data());
// });
//   return ()=> {
//     unsub()
//   }
  
//   },[])