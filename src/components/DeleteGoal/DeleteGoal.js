import React from 'react';

const DeleteGoal = ({ goalId, onDelete }) => {
    const handleDelete = () => {
         onDelete(goalId);
    };

    return (
        <button onClick={handleDelete}>
            Delete Goal
        </button>
    );
};

export default DeleteGoal;
