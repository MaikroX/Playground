import Headline from "../Components/Headline/Headline.jsx";
import PersoenlicherBlog from "../Components/PersoenlicherBlog/PersoenlicherBlog.jsx";
import CloseIcon from "../Components/Icons/IconComponent.jsx";

const Home = () => {
  return (
    <div className="d-flex flex-column w-100 justify-content-center h-100 mt-4">
      <h1 className="text-center">Playground</h1>

      {/* Persönlicher Blog über den "Sanity" Service*/}
      <div className="PersönlicherBlog">
        <PersoenlicherBlog />
      </div>

      {/* Überschriften */}
      <div className="d-flex flex-column p-2 border">
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

      {/* Icons von Bootstrap*/}
      <div className="d-flex flex-column p-2 border">
        <Headline className={`text-center`}>
          Bootstrap Icons Einbindung
        </Headline>
        {/* Als Komponente > IconComponent < für mehrmalige Nutzung */}
        <CloseIcon size={24} color="red" />
        <CloseIcon size={24} color="gray" />
        {/* Wenn es einmalig genutzt wird auf der Seite */}
        <i className="bi bi-list"></i>
      </div>
    </div>
  );
};

export default Home;
