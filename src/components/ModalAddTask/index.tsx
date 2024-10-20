import React from "react";
import { Input, Modal, Radio } from "antd";
import { Body, ButtonCancel, ButtonSave, ButtonsWrapper, Title } from "./styles";
import { useForm, Controller } from "react-hook-form";
import { useTasks } from "../../hooks/useTasks";

interface ModalProps {
    isModalOpen: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TaskInputs {
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
}

export function ModalAddTask({ isModalOpen, setIsOpenModal }: ModalProps) {
    const { handleSubmit, control, formState: { errors }, reset, watch } = useForm<TaskInputs>();
    const { createTask } = useTasks();

    const handleCreateNewTask = (data: TaskInputs) => {
        createTask(data);
        reset();
        setIsOpenModal(false);
    };

    const handleCancel = () => {
        reset();
        setIsOpenModal(false);
    };

    return (
        <form>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <Title>Adicionar nova tarefa</Title>
                <Body>
                    <div>
                        <p>Título:</p>
                        <Controller
                            name="title"
                            control={control}
                            defaultValue={watch("title")}
                            rules={{
                                required: "Este campo é obrigatório",
                                maxLength: { value: 50, message: "Máximo de 50 caracteres" }
                            }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Título"
                                />
                            )}
                        />
                        {errors.title && (
                            <p style={{ color: "red" }}>
                                {typeof errors.title.message === "string"
                                    ? errors.title.message
                                    : "Erro no título"}
                            </p>
                        )}
                    </div>
                    <div>
                        <p>Descrição:</p>
                        <Controller
                            name="description"
                            control={control}
                            defaultValue={watch("description")}
                            rules={{
                                required: "Este campo é obrigatório",
                                maxLength: { value: 200, message: "Máximo de 200 caracteres" }
                            }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Descrição"
                                />
                            )}
                        />
                        {errors.description && (
                            <p style={{ color: "red" }}>
                                {typeof errors.description.message === "string"
                                    ? errors.description.message
                                    : "Erro na descrição"}
                            </p>
                        )}
                    </div>
                    <div>
                        <p>Status:</p>
                        <Controller
                            name="status"
                            control={control}
                            defaultValue="todo"
                            rules={{ required: "Este campo é obrigatório" }}
                            render={({ field }) => (
                                <Radio.Group {...field}>
                                    <Radio value="todo">To do</Radio>
                                    <Radio value="in_progress">In Progress</Radio>
                                    <Radio value="done">Done</Radio>
                                </Radio.Group>
                            )}
                        />
                        {errors.status && (
                            <p style={{ color: "red" }}>
                                {typeof errors.status.message === "string"
                                    ? errors.status.message
                                    : "Erro no status"}
                            </p>
                        )}
                    </div>
                </Body>
                <ButtonsWrapper>
                    <ButtonCancel
                        onClick={handleCancel}
                    >
                        Cancelar
                    </ButtonCancel>
                    <ButtonSave onClick={handleSubmit(handleCreateNewTask)}>
                        Salvar
                    </ButtonSave>
                </ButtonsWrapper>
            </Modal>
        </form>
    );
}
