import React, { useRef, useState } from 'react'

interface Message{
    id: string;
    text: string
      createdAt: Date
      uid?:string
      photoURL?:string
}

function ChatRoom() {
  const dummy = useRef<any>();
  

  const [messages, setMessages] = useState<Message[]>([]);

  const [formValue, setFormValue] = useState('');

    const createId = () => {
        return Math.floor(Math.random() * 1000000).toString();
    }

  const sendMessage = async (e:any) => {
    e.preventDefault();

    const { uid, photoURL, } = {uid:undefined, photoURL: undefined};

      setMessages([
          ...messages,
          {
              id: createId(),
      text: formValue,
      createdAt: new Date(),
      uid,
      photoURL
    }
     ])

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form className='messageInput' onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>send</button>

    </form>
  </>)
}


function ChatMessage(props:any) {
  const { text, uid, photoURL } = props.message;
  ///TODO: use userID
  const userId = null;
  const messageClass = uid === userId ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt='Profile' />
      <p>{text}</p>
    </div>
  </>)
}

export default ChatRoom
