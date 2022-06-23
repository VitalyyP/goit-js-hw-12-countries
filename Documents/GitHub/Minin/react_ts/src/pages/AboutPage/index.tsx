import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useNavigate();
  return (
    <>
      <h1 className="center">About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam,
        nesciunt vero at voluptatem porro debitis rem itaque asperiores laborum
        labore tempora odit pariatur quisquam enim! Sit a facere voluptatibus.
      </p>
      <button className="btn indigo" onClick={() => history("/")}>
        Return to todos
      </button>
    </>
  );
};

export default AboutPage;
