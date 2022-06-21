import React from "react";
import Title from "./title";
import peopleService from "../services/requests";
const Main = (props) => {
  const arr = props.arr;

  return (
    <div>
      {props.value === "" ? (
        <div>
          <Title title="Numbers" />
          {arr.map((p) => (
            <div key={p.id}>
              <p key={p.id}>
                {p.id}. {p.name}. {p.number}
              </p>
              <button
                value={p.id}
                onClick={() => peopleService.deletePerson(p.id)}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <Title title="Filtered Contacts" />
          <div>{props.function}</div>
        </div>
      )}
    </div>
  );
};

export default Main;
