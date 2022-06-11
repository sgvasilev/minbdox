import React, { useContext } from "react";
import { ACTIVE, DONE } from "../../constants";
import { TodoContext } from "../../context";
const TodoCard = ({
  text,
  id,
  status,
}: {
  text: string;
  id: string;
  status: string;
}): JSX.Element => {
  const { updateTodo } = useContext(TodoContext);
  const _handleCardClick = () => {
    let newStatus;
    if (status === ACTIVE) {
      newStatus = DONE;
    } else {
      newStatus = ACTIVE;
    }
    updateTodo(id, newStatus);
  };

  return (
    <div onClick={_handleCardClick} className={`card card_${status}`}>
      <button className="card__btn">
        <span id="arrow_left" className="card__arrow"></span>
        <span id="arrow_right" className="card__arrow"></span>
      </button>
      <div className="card__text"> {text}</div>
    </div>
  );
};

export default TodoCard;
