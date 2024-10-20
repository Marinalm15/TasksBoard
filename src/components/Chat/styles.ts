import styled from "styled-components";

export const ChatContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 20rem;
    height: 30rem;
    margin-right: 2rem;
    background-color: #808080;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top-right-radius: 0.8rem;
    border-top-left-radius: 0.8rem;
`

export const Header = styled.div`
    display: flex;
    font-size: 1rem;
    gap: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #fff;
`

export const ButtonClose = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    gap: 0.5rem;
    text-align: end;

    &:hover {
        filter: brightness(0.8);
    }
`

export const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    overflow-y: auto;
`

export const MessagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    overflow-y: auto;
`

export const Message = styled.div`
    background-color: #252525;
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: inline-flex; 
    flex-direction: column;
    align-self: flex-end; 
    word-wrap: break-word; 
    position: relative; 
    margin-right: 1rem; 

    &::after {
        content: '';
        position: absolute;
        right: -8px; 
        top: 10px; 
        width: 0;
        height: 0;
        border-left: 10px solid #252525; 
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
    }
`

export const DateWrapper = styled.p`
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
    font-size: 0.7rem;
    color: #808080;
    filter: brightness(0.8);
    margin-top: 0.5rem;
    justify-content: end;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`

export const ButtonSend = styled.button`
    cursor: pointer;
    border: none;
    background-color: #252525;
    display: flex;
    align-items: center;
    border-radius: 50%;
    padding: 0.5rem;

    &:hover {
        filter: brightness(0.8);
    }
`