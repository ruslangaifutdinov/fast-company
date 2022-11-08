import React from "react";
import Users from "./users";

const Table = () => {
  return (
    <>
      <table className="table align-middle">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <Users />
      </table>
    </>
  );
};

export default Table;
