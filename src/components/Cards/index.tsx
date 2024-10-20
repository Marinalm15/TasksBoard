import { ChatCircleDots, TrashSimple } from "phosphor-react";
import { CardsContainer, CardTitle, CardDescription, Header, ButtonDelete, ButtonChangeStatus, ActionsButtonsWrapper, ButtonsStatus, ButtonChat } from "./styles";
import { useTasks } from "../../hooks/useTasks";
import { useEffect } from "react";

interface CardsProps {
    status: 'todo' | 'in_progress' | 'done';
}

export function Cards({ status }: CardsProps) {
    const { tasks, fetchTasks, deleteTask, updateTaskStatus, setOpenChat } = useTasks()

    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    const filteredTasks = tasks.filter(task => task.status === status);

    const handleChangeStatus = async (id: number, newStatus: 'todo' | 'in_progress' | 'done') => {
        const taskToUpdate = tasks.find((task) => task.id === id);

        if (taskToUpdate) {
            await updateTaskStatus(id, {
                title: taskToUpdate.title,
                description: taskToUpdate.description,
                status: newStatus,
            });
        }
    };


    return (
        <>
            {filteredTasks.map((task) => (
                <CardsContainer key={task.id}>
                    <Header>
                        <CardTitle>
                            {task.title}
                        </CardTitle>
                        <ButtonDelete onClick={() => deleteTask(task.id)}>
                            <TrashSimple size={15} />
                        </ButtonDelete>
                    </Header>
                    <CardDescription>
                        {task.description}
                    </CardDescription>
                    <ActionsButtonsWrapper>
                        <ButtonChat onClick={() => setOpenChat({ id: task.id, isOpen: true })}>
                            <ChatCircleDots size={20} />
                        </ButtonChat>
                        <ButtonsStatus>
                            {status !== 'todo' && (
                                <ButtonChangeStatus
                                    status="todo"
                                    onClick={() => handleChangeStatus(task.id, 'todo')}>
                                    Mover para To Do
                                </ButtonChangeStatus>
                            )}
                            {status !== 'in_progress' && (
                                <ButtonChangeStatus
                                    status="in_progress"
                                    onClick={() => handleChangeStatus(task.id, 'in_progress')}>
                                    Mover para In Progress
                                </ButtonChangeStatus>
                            )}
                            {status !== 'done' && (
                                <ButtonChangeStatus
                                    status="done"
                                    onClick={() => handleChangeStatus(task.id, 'done')}>
                                    Mover para Done
                                </ButtonChangeStatus>
                            )}
                        </ButtonsStatus>
                    </ActionsButtonsWrapper>
                </CardsContainer>
            ))}
        </>
    )
}