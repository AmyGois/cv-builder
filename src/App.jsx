import CvBuilder from "./components/CvBuilder";
import CvResult from "./components/CvResult";
import "./App.css";

function App() {
  return (
    <>
      <section>
        <CvBuilder />
      </section>
      <section>
        <CvResult />
      </section>
    </>
  );
}

export default App;
