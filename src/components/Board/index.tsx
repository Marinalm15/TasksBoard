import { PlusCircle } from "phosphor-react";
import { BoardContainer, ButtonAddTask, CardsContainer, Column, Header, StatusTitle } from "./styles";
import { Cards } from "../Cards";
import { ModalAddTask } from "../ModalAddTask";
import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { Chat } from "../Chat";

export function Board() {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const { openChat } = useTasks()

    console.log(openChat)
    return (
        <>
            <BoardContainer>
                <Header>
                    <ButtonAddTask onClick={() => setIsOpenModal(true)}>
                        <span>Adcionar tarefa</span>
                        <PlusCircle size={20} color="#ffff" />
                    </ButtonAddTask>
                </Header>
                <CardsContainer>
                    <Column status="todo">
                        <StatusTitle>To Do</StatusTitle>
                        <Cards status="todo" />
                    </Column>
                    <Column status="in_progress">
                        <StatusTitle>In Progress</StatusTitle>
                        <Cards status="in_progress" />
                    </Column>
                    <Column status="done">
                        <StatusTitle>Done</StatusTitle>
                        <Cards status="done" />
                    </Column>
                </CardsContainer>
            </BoardContainer>

            {openChat.isOpen && <Chat />}

            <ModalAddTask isModalOpen={isOpenModal} setIsOpenModal={setIsOpenModal} />
        </>
    )
}