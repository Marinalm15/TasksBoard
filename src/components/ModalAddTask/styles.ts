import styled from "styled-components";

export const Title = styled.p`
    font-size: 1rem;
    font-weight: 600;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: end;
    gap: 1rem;
`

export const ButtonSave = styled.button`
    border: none;
    background-color: #252525;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &:hover {
        filter: brightness(0.8);
    }
`

export const ButtonCancel = styled.button`
    border: none;
    background-color: transparent;
    border: 1px solid #fff;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &:hover {               
        filter: brightness(0.8);
    }
`