import styled from "styled-components";

interface ColumnProps {
    status: string
}

export const BoardContainer = styled.div`
    padding-inline: 10rem;
    padding-top: 5rem;
    margin-bottom: 5rem;
`

export const Header = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 1rem;
`

export const ButtonAddTask = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        filter: brightness(0.8);
    }
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`

export const Column = styled.div<ColumnProps>`
    min-height: 30rem;
    background-color: #808080;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-top: 0.5rem solid
        ${({ status }) =>
        status === 'todo' ? '#999933' :
            status === 'in_progress' ? '#3399a3' :
                status === 'done' ? '#669966' :
                    '#666'}; 
`

export const StatusTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
`