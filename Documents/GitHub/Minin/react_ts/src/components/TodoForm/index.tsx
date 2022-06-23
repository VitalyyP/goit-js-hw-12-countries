// import React, { useState } from "react";
import React, { useRef } from "react";
import { ITodoForm } from "../../interfaces";

const TodoForm: React.FC<ITodoForm> = (props) => {
  // const [state, setState] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setState(e.target.value);
  // };

  const onPressEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // console.log(state);
      // setState("");
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="impup-field mt2">
      <label htmlFor="title" className="active">
        Enter name of task
      </label>
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter name of task"
        // value={state}
        // onChange={onChange}
        onKeyPress={onPressEnter}
      />
    </div>
  );
};

export default TodoForm;
