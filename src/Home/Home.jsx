import Headline from "../Components/Headline/Headline.jsx";
import PersoenlicherBlog from "../Components/PersoenlicherBlog/PersoenlicherBlog.jsx";

const Home = () => {
  return (
    <div className="d-flex flex-column w-100 justify-content-center h-100 mt-4">
      <h1 className="text-center">Playground</h1>
      <div className="PersönlicherBlog">
        <PersoenlicherBlog />

        <div className="d-flex flex-column p-2">
          <Headline className={`text-center`}>Das sind Überschriften</Headline>
          <Headline level="h1">
            {" "}
            Das ist eine Überschrift in <b>h1</b>
          </Headline>
          <Headline level="h2">
            {" "}
            Das ist eine Überschrift in <b>h2</b>
          </Headline>
          <Headline level="h3">
            {" "}
            Das ist eine Überschrift in <b>h3</b>
          </Headline>
          <Headline level="h4">
            {" "}
            Das ist eine Überschrift in <b>h4</b>
          </Headline>
          <Headline level="h5">
            {" "}
            Das ist eine Überschrift in <b>h5</b>
          </Headline>
          <Headline level="h6">
            {" "}
            Das ist eine Überschrift in <b>h6</b>
          </Headline>
        </div>
      </div>
    </div>
  );
};

export default Home;
