import React, { useState } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function Chat() {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 1 }}
      />
    </View>
  );
}
