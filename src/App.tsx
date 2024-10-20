import { Board } from "./components/Board";
import { TaskContextProvider } from "./context/TasksContext";

export function App() {

  return (
    <>
      <TaskContextProvider>
        <Board />
      </TaskContextProvider>
    </>
  )
}
