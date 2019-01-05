import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
//TODO proptypes

export default function ExpenseItemView(props) {
  const expense = props.expense;
  return (
    <tr>
      <td
        onClick={() => props.onClientClick(expense.client)}
        style={{ cursor: "pointer" }}>
        {expense.client}
      </td>
      <td>{expense.price}</td>
      <td>{expense.description}</td>

      <td>
        <div className="tableIcons">
          <span
            className="editIcon"
            onClick={() => {
              props.onEditClick(expense);
            }}>
            <FontAwesomeIcon icon={faEdit} />
          </span>
          <span
            className="deleteIcon"
            onClick={() => {
              props.handleRemove(expense.id);
            }}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
        </div>
      </td>
    </tr>
  );
}
