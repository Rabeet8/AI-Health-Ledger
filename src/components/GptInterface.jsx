// import React from 'react';
// import './GptInterface.css';

// const GptInterface = ({ name }) => {
//   return (
//     <div>
//       <h3 className='user_call'>Hey {name} what is your problem</h3>

//       <div className="chat-interface">
//         <div className="chat-input-holder flex-column">
//           <form className="flex-grow-1">
//             <input
//               rows="1"
//               className="chat-input-textarea flex-shrink-0"
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GptInterface;

import React from 'react'
import './GptInterface.css';
import logo from '../images/logo.webp'

// import logo from './logo.svg';
// import './App.css';
import './normal.css'
import { useState } from 'react';

function GptInterface({ name }) {
//add state for input and chat log

const [input, setInput] = useState("");
const [chatLog, setChatLog] = useState([{
  user: "gpt",
  message: `Hey ${name} how can i help you`
},
// {
//   user: "me",
//   message: ""
// }

]);

// clear chat function
function clearChat(){
  setChatLog([]);
}

  async function handleSubmit(e){
    e.preventDefault();
    // console.log('submit')
    let chatLogNew = [...chatLog,{user: "me", message: `${input}`}]
     setInput ("");
     setChatLog(chatLogNew)

    //Fetching response to the api here combining teh chat log array
    //of messages and sending it as a message to local host 3001 as a post
    const messages =chatLogNew.map((message)=>message.message).join("/n")
    const response = await fetch("http://localhost:3080/",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages
      })
    });
const data = await response.json();
setChatLog([...chatLogNew,{user: "gpt", message: `${data.message}`}])

}


  return (
    <div className="App">

      {/* <aside className="sidemenu">
        <div className="side-menu-button" onClick ={clearChat}>
          <span>+</span>
          New Chat
        </div>
      </aside> */}
      <section className="chat-box">
        <div className="chat-log">
          {chatLog.map((message,index)=>(

        <ChatMessage key = {index} message = {message}/>
          ))}

          {/* <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt">
               
              </div>
              <div className="message">
                I am an AI
              </div>
            </div>
          </div> */}
        </div>
        <div className="chat-input-holder">
          <form  onSubmit= {handleSubmit}>
          <input 
           rows="1" 
           placeholder='Ask you medical query'
           value ={input}
           onChange={e => setInput(e.target.value)}
           className = "chat-input-textarea"  >
          </input>
          </form>
        </div>
      </section>



    </div>
  );
}

const formatResponse = (response) => {
  // Split the response by periods or other delimiters
  const splitResponse = response.split('. ');
  return splitResponse.map((sentence, index) => (
    <p key={index}>{sentence}</p>
  ));
};


const ChatMessage = ({message}) =>{
  return(
    <div className={`chat-message ${message.user =="gpt" && "chatgpt"}`}>
    <div className="chat-message-center">
      <div className={`avatar ${message.user =="gpt" && "chatgpt"}`}>


      {message.user === "gpt" && 
            <img
              src={logo} 
              alt="Avatar"
              borderRadius = {50}
              
              width={41}
              height={41}
              className="avatar-img"
            />
          }


      </div> 
      <div className="message">
      {message.user === "gpt" ? formatResponse(message.message) : message.message}
      </div>
    </div>
  </div>
  )
}

export default GptInterface;
