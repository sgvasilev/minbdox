import React, { useContext } from "react";
import { ActionType } from "../../actions/todoActions";
import { TodoStatus } from "../../constants";
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
  const { dispatch } = useContext(TodoContext);
  const _handleCardClick = (): void => {
    let newStatus;
    if (status === TodoStatus.ACTIVE) {
      newStatus = TodoStatus.DONE;
    } else {
      newStatus = TodoStatus.ACTIVE;
    }
    dispatch({
      type: ActionType.UPDATE_TODO,
      payload: { id, status: newStatus },
    });
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
