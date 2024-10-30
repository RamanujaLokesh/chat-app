import React from 'react';
import Conversation from './Conversation.jsx';
import { getRandomEmoji } from '../../utils/emojis.js';
import useGetConversations from '../../hooks/useGetConversations.js';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className='py-2 flex flex-col overflow-auto '>
      {/* <div><h1>hello</h1></div> */}
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default Conversations;