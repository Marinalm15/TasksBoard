import styled from "styled-components";

interface ButtonProps {
    status: string
}

export const CardsContainer = styled.div`
    background-color: #252525;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.8rem;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`

export const ButtonDelete = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;

    &:hover {
        filter: brightness(0.8);
    }
`

export const CardTitle = styled.p`
    font-size: 1rem;
    font-weight: 600;
`

export const CardDescription = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
`

export const ActionsButtonsWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #808080;
`

export const ButtonChangeStatus = styled.button<ButtonProps>`
    border: none;
    cursor: pointer;
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    background-color:
        ${({ status }) =>
        status === 'todo' ? '#999933' :
            status === 'in_progress' ? '#3399a3' :
                status === 'done' ? '#669966' :
                    '#666'}; 

    &:hover {
        filter: brightness(0.8);
    }
`

export const ButtonsStatus = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;    
`

export const ButtonChat = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;

    &:hover {
        filter: brightness(0.8);
    }
`