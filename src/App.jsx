import { useState } from "react";
import GeneralForm from "./components/GeneralForm";
import ExperienceSection from "./components/ExperienceSection";
import CvResult from "./components/CvResult";
import "./app.css";

function App() {
  const [generalName, setGeneralName] = useState("");
  const [generalJobTitle, setGeneralJobTitle] = useState("");
  const [generalEmail, setGeneralEmail] = useState("");
  const [generalPhone, setGeneralPhone] = useState("");
  const [generalAddress, setGeneralAddress] = useState("");
  const [generalPortfolio, setGeneralPortfolio] = useState("");
  const [generalPhoto, setGeneralPhoto] = useState();
  const generalProps = {
    name: generalName,
    handleName: function (e) {
      setGeneralName(e.target.value);
    },
    jobTitle: generalJobTitle,
    handleJobTitle: function (e) {
      setGeneralJobTitle(e.target.value);
    },
    email: generalEmail,
    handleEmail: function (e) {
      setGeneralEmail(e.target.value);
    },
    phone: generalPhone,
    handlePhone: function (e) {
      setGeneralPhone(e.target.value);
    },
    address: generalAddress,
    handleAddress: function (e) {
      setGeneralAddress(e.target.value);
    },
    portfolio: generalPortfolio,
    handlePortfolio: function (e) {
      setGeneralPortfolio(e.target.value);
    },
    photo: generalPhoto,
    handlePhoto: function (e) {
      setGeneralPhoto(URL.createObjectURL(e.target.files[0]));
    },
  };

  return (
    <>
      <section>
        <div>
          <GeneralForm generalProps={generalProps} />
        </div>
        <div>
          <ExperienceSection />
        </div>
      </section>
      <section>
        <CvResult />
      </section>
    </>
  );
}

export default App;
