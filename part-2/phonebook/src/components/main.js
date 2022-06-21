import React from "react";
import Title from "./title";
import peopleService from "../services/requests";
const Main = (props) => {
  const arr = props.arr;
  //   const handleClick = (name, id) => {
  //     peopleService.removePerson(name, id).then((response) => {
  //       console.log(response)
  //       props.setState(prevState => prevState.filter(p => p.id));
  //     });
  //   };
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
                onClick={() => {
                  peopleService.removePerson(
                    p.name,
                    p.id,
                    props.state,
                    props.setState
                  );
                }}
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
