import ExperienceForm from "./ExperienceForm";
import Button from "./Button";

function ExperienceSection({ workProps }) {
  return (
    <>
      <h2>Work Experience</h2>
      {workProps.jobTitles.map((job) => {
        const isSelfEmployed = workProps.selfEmployed.find(
          (item) => item.id === job.id
        );
        const endDate = workProps.endDates.find((item) => item.id === job.id);
        const jobResponsibilities = workProps.responsibilities.find(
          (item) => item.id === job.id
        );

        return (
          <form key={job.id}>
            <ExperienceForm
              id={job.id}
              selfEmployed={isSelfEmployed.selfEmployed}
              presentDay={endDate.presentDay}
              responsibilities={jobResponsibilities.responsibilities}
              handleJobTitle={workProps.handleJobTitle}
              handleSelfEmployed={workProps.handleSelfEmployed}
              handleCompanies={workProps.handleCompanies}
              handlStartMonth={workProps.handlStartMonth}
              handleStartYear={workProps.handleStartYear}
              handlEndMonth={workProps.handlEndMonth}
              handleEndYear={workProps.handleEndYear}
              handlePresentDay={workProps.handlePresentDay}
              handleResponsibilities={workProps.handleResponsibilities}
              handleNewResponsibility={workProps.handleNewResponsibility}
              handleDeleteResponsibility={workProps.handleDeleteResponsibility}
              handleDeleteForm={workProps.handleDeleteForm}
            />
          </form>
        );
      })}
      <Button label="+ Add Job" onClick={workProps.handleNewForm} />
    </>
  );
}

export default ExperienceSection;
