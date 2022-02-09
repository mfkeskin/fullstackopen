const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const parts = props.parts;
  return (
    <div>
      {parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        );
      })}
    </div>
  );
};

const Course = (props) => {
  const course = props.course;
  const parts = props.course.parts;
  let total = parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);
  return (
    <div>
      <Header key={course.id} course={course.name} />
      <Content parts={parts} />
      <p>total of {total} exercises</p>
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

export default Course;
