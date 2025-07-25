import Input from "./Input";
import DatePicker from "./DatePicker";
import Button from "./Button";

function EducationForm({
  id,
  stillStudying,
  handleCourse,
  handleLevel,
  handleSchool,
  handleEndMonth,
  handleEndYear,
  handleStillStudying,
  handleDeleteForm,
}) {
  return (
    <>
      <Input
        label="Course"
        id={"course-" + id}
        required={true}
        onChange={(e) => handleCourse(id, e)}
      />
      <Input
        label="Certification level"
        id={"level-" + id}
        required={false}
        onChange={(e) => handleLevel(id, e)}
      />
      <Input
        label="School"
        id={"school-" + id}
        required={true}
        onChange={(e) => handleSchool(id, e)}
      />
      <div>
        {!stillStudying && (
          <div>
            <DatePicker
              startOrEnd="end"
              id={id}
              onChangeMonth={(e) => handleEndMonth(id, e)}
              onChangeYear={(e) => handleEndYear(id, e)}
            />
          </div>
        )}
        <Input
          label="Still studying? "
          type="checkbox"
          id={"still-studying-" + id}
          onChange={(e) => handleStillStudying(id, e)}
        />
      </div>
      <Button
        label="- Delete Course"
        type="button"
        onClick={() => handleDeleteForm(id)}
      />
    </>
  );
}

export default EducationForm;
