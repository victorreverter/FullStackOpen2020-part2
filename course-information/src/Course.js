import React from "react";
import ReactDOM from "react-dom";

const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

const Content = (props) => {
  let arr = props.parts;

  return (
    <div>
      {arr.map((elem) => {
        return (
          <p key={elem.name}>
            {elem.name} {elem.exercises}
          </p>
        );
      })}
    </div>
  );
};

const Total = (props) => {
  let total = props.parts.reduce((all, item) => item.exercises + all, 0);

  return (
    <div>
      <p>
        <b>total of {total} exercises</b>
      </p>
    </div>
  );
};

const Course = ({ course }) => {
  let arrCourse = course;

  return arrCourse.map((item, index) => {
    // console.log(item);
    // console.log(item.name);
    return (
      <>
        <Header key={item.id} name={item.name} />
        <Content parts={item.parts} />
        <Total parts={item.parts} />
      </>
    );
  });
};

export default Course