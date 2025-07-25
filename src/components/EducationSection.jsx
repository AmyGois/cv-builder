import EducationForm from "./EducationForm";
import Button from "./Button";

function EducationSection({ educationProps }) {
  return (
    <>
      <h2>Education</h2>
      {educationProps.courses.map((course) => {
        const endDate = educationProps.endDates.find(
          (item) => item.id === course.id
        );

        return (
          <form key={course.id}>
            <EducationForm
              id={course.id}
              stillStudying={endDate.stillStudying}
              handleCourse={educationProps.handleCourses}
              handleLevel={educationProps.handleLevels}
              handleSchool={educationProps.handleSchools}
              handleEndMonth={educationProps.handleEndMonths}
              handleEndYear={educationProps.handleEndYears}
              handleStillStudying={educationProps.handleStillStudying}
              handleDeleteForm={educationProps.handleDeleteForm}
            />
          </form>
        );
      })}
      <Button label="+ Add Course" onClick={educationProps.handleNewForm} />
    </>
  );
}

export default EducationSection;
