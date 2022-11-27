import React, { useState } from "react";
import "./styles.css"

const App = () => {
    const [todoText, setTodoText] = useState('');
    const [launchTodos, setLaunchTodos] = useState('');
    const [incompleteTodos, setIncompleteTodos] = useState(['あ', 'い']);
    const [completeTodos, setCompleteTodos] = useState(['う']);


    const onChangeTodoText = (event) => setTodoText(event.target.value);

    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...launchTodos, todoText];
        setLaunchTodos(newTodos);
        setTodoText("");
    };


    const onClickLaunch = (index) => {
        const newLaunchTodos = [...launchTodos];
        newLaunchTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, launchTodos[index]];
        setLaunchTodos(newLaunchTodos);
        setIncompleteTodos(newIncompleteTodos);
    }
    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setCompleteTodos(newTodos);
    }
    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    }

    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }


    return (
        <>
            <div className="input-area">
                <input placeholder="Todoを入力" value={todoText} onChange={onChangeTodoText} />
                <button onClick={onClickAdd}>追加</button>
            </div>
            <div className="uncomplete-area">
              <p className="title">未着手</p>
              <ul>
              {launchTodos.map((todo, index) => {
                  return (
                      <div key={todo} className="list-row" onChange={onChangeTodoText}>
                          <li>{todo}</li>
                          <button onClick={() => onClickLaunch(index)}>着手する</button>
                      </div>
                  );
                    })}
              </ul>
            </div>

            <div className="incomplete-area">
                <p className="title">現在進行中</p>
                <ul>
                    {incompleteTodos.map((todo, index) => {
                        return (
                            <div key={todo} className="list-row">
                                <li>{todo}</li>
                                <button onClick={() => onClickComplete(index)}>完了</button>
                                <button onClick={() => onClickDelete(index)}>削除</button>
                            </div>
                        );
                    })}
                </ul>
            </div>

            <div className="complete-area">
                <p className="title">完了</p>
                <ul>
                    {completeTodos.map((todo, index) => {
                        return (
                            <div key={todo} className="list-row">
                                <li>{todo}</li>
                                <button onClick={() => onClickBack(index)}>戻す</button>
                            </div>
                        );
                    })}

                </ul>
            </div>

        </>
    )
}
export default App