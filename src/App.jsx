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

  const [workJobTitles, setWorkJobTitles] = useState([]);
  const [workSelfEmployed, setWorkSelfEmployed] = useState([]);
  const [workCompanies, setWorkCompanies] = useState([]);
  const [workStartDates, setWorkStartDates] = useState([]);
  const [workEndDates, setWorkEndDates] = useState([]);
  const [workResponsibilities, setWorkResponsibilities] = useState([]);
  const [workIdNum, setWorkIdNum] = useState(1);

  function calculateWorkId() {
    const newId = "XPID" + workIdNum;
    setWorkIdNum(workIdNum + 1);

    return newId;
  }

  function createNewXPForm() {
    const formId = calculateWorkId();

    const newJobTitle = {
      id: formId,
      jobTitle: "",
    };
    const jobTitles = workJobTitles;
    jobTitles.push(newJobTitle);
    setWorkJobTitles(jobTitles);

    const newSelfEmployed = {
      id: formId,
      selfEmployed: false,
    };
    const selfEmployed = workSelfEmployed;
    selfEmployed.push(newSelfEmployed);
    setWorkSelfEmployed(selfEmployed);

    const newCompany = {
      id: formId,
      company: "",
    };
    const companies = workCompanies;
    companies.push(newCompany);
    setWorkCompanies(companies);

    const newStartDate = {
      id: formId,
      month: "",
      year: "",
    };
    const startDates = workStartDates;
    startDates.push(newStartDate);
    setWorkStartDates(startDates);

    const newEndDate = {
      id: formId,
      month: "",
      year: "",
      presentDay: false,
    };
    const endDates = workEndDates;
    endDates.push(newEndDate);
    setWorkEndDates(endDates);

    const newResponsibilities = {
      id: formId,
      responsibilities: [],
    };
    const responsibilities = workResponsibilities;
    responsibilities.push(newResponsibilities);
    setWorkResponsibilities(responsibilities);
  }

  const workProps = {
    handleNewForm: createNewXPForm,

    jobTitles: workJobTitles,
    handleJobTitle: function (id, e) {
      setWorkJobTitles(
        workJobTitles.map((job) => {
          if (job.id === id) {
            return {
              ...job,
              jobTitle: e.target.value,
            };
          } else {
            return job;
          }
        })
      );
    },

    selfEmployed: workSelfEmployed,
    handleSelfEmployed: function (id, e) {
      setWorkSelfEmployed(
        workSelfEmployed.map((employmentStatus) => {
          if (employmentStatus.id === id) {
            return {
              ...employmentStatus,
              selfEmployed: e.target.checked,
            };
          } else {
            return employmentStatus;
          }
        })
      );
    },

    companies: workCompanies,
    handleCompanies: function (id, e) {
      setWorkCompanies(
        workCompanies.map((company) => {
          if (company.id === id) {
            return {
              ...company,
              company: e.target.value,
            };
          } else {
            return company;
          }
        })
      );
    },

    startDates: workStartDates,
    handlStartMonth: function (id, e) {
      setWorkStartDates(
        workStartDates.map((date) => {
          if (date.id === id) {
            return {
              ...date,
              month: e.target.value,
            };
          } else {
            return date;
          }
        })
      );
    },
    handleStartYear: function (id, e) {
      setWorkStartDates(
        workStartDates.map((date) => {
          if (date.id === id) {
            return {
              ...date,
              year: e.target.value,
            };
          } else {
            return date;
          }
        })
      );
    },

    endDates: workEndDates,
    handlEndMonth: function (id, e) {
      setWorkEndDates(
        workEndDates.map((date) => {
          if (date.id === id) {
            return {
              ...date,
              month: e.target.value,
            };
          } else {
            return date;
          }
        })
      );
    },
    handleEndYear: function (id, e) {
      setWorkEndDates(
        workEndDates.map((date) => {
          if (date.id === id) {
            return {
              ...date,
              year: e.target.value,
            };
          } else {
            return date;
          }
        })
      );
    },
    handlePresentDay: function (id, e) {
      setWorkEndDates(
        workEndDates.map((date) => {
          if (date.id === id) {
            return {
              ...date,
              presentDay: e.target.checked,
            };
          } else {
            return date;
          }
        })
      );
    },

    responsibilities: workResponsibilities,
    handleResponsibilities: function (id, itemId, e) {
      const jobResponsibilities = workResponsibilities.find(
        (item) => item.id === id
      );
      const changedResponsibilities = jobResponsibilities.responsibilities.map(
        (item) => {
          if (item.id === itemId) {
            return {
              ...item,
              responsibility: e.target.value,
            };
          } else {
            return item;
          }
        }
      );
      setWorkResponsibilities(
        workResponsibilities.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              responsibilities: changedResponsibilities,
            };
          } else {
            return item;
          }
        })
      );
    },
    handleNewResponsibility: function (id) {
      const jobResponsibilities = workResponsibilities.find(
        (item) => item.id === id
      );
      const newResponsibility = {
        id: id + "R" + jobResponsibilities.responsibilities.length,
        responsibility: "",
      };
      jobResponsibilities.responsibilities.push(newResponsibility);
      setWorkResponsibilities(
        workResponsibilities.map((item) => {
          if (item.id === id) {
            return jobResponsibilities;
          } else {
            return item;
          }
        })
      );
    },
    handleDeleteResponsibility: function (id, itemId) {
      const jobResponsibilities = workResponsibilities.find(
        (item) => item.id === id
      );
      const deletedResponsibilities =
        jobResponsibilities.responsibilities.filter(
          (item) => item.id !== itemId
        );
      setWorkResponsibilities(
        workResponsibilities.map((item) => {
          if (item.id === id) {
            return {
              ...jobResponsibilities,
              responsibilities: deletedResponsibilities,
            };
          } else {
            return item;
          }
        })
      );
    },

    handleDeleteForm: function (id) {
      setWorkJobTitles(workJobTitles.filter((job) => job.id !== id));
      setWorkSelfEmployed(
        workSelfEmployed.filter(
          (employmentStatus) => employmentStatus.id !== id
        )
      );
      setWorkCompanies(workCompanies.filter((company) => company.id !== id));
      setWorkStartDates(workStartDates.filter((date) => date.id !== id));
      setWorkEndDates(workEndDates.filter((date) => date.id !== id));
      setWorkResponsibilities(
        workResponsibilities.filter(
          (responsibilities) => responsibilities.id !== id
        )
      );
    },
  };

  return (
    <>
      <section>
        <div>
          <GeneralForm generalProps={generalProps} />
        </div>
        <div>
          <ExperienceSection workProps={workProps} />
        </div>
      </section>
      <section>
        <CvResult />
      </section>
    </>
  );
}

export default App;
