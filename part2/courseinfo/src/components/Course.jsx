const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <strong>Number of exercises {total}</strong>
    </p>
  );
};

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header courseName={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
