import { useEffect, useRef, useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { ButtonClose, ButtonSend, ChatContainer, DateWrapper, Header, InputWrapper, Message, MessagesContainer, MessagesWrapper } from "./styles";
import { Input } from "antd";
import { PaperPlaneRight, X } from "phosphor-react";

interface Message {
    id: number;
    text: string;
    timestamp: Date;
}

export function Chat() {
    const { openChat, tasks, setOpenChat } = useTasks()
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, {
                id: Date.now(),
                text: newMessage,
                timestamp: new Date()
            }]);
            setNewMessage('');
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    return (
        <ChatContainer>
            <ButtonClose onClick={() => setOpenChat({ id: 0, isOpen: false })}>
                <X size={18} />
            </ButtonClose>
            <Header>
                <strong>Tarefa:</strong>
                {tasks.find(task => task.id === openChat.id)?.title}
            </Header>

            <MessagesContainer>
                <MessagesWrapper>
                    {messages.map(message => (
                        <Message key={message.id}>
                            {message.text}
                            <DateWrapper>
                                <span>{message.timestamp.toLocaleDateString()}</span>
                                <span>{message.timestamp.toLocaleTimeString()}</span>
                            </DateWrapper>

                        </Message>
                    ))}
                    <div ref={messagesEndRef} />
                </MessagesWrapper>

                <InputWrapper>
                    <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        onPressEnter={handleSendMessage}
                    />
                    <ButtonSend onClick={handleSendMessage}>
                        <PaperPlaneRight size={20} />
                    </ButtonSend>
                </InputWrapper>
            </MessagesContainer>

        </ChatContainer>
    )
}