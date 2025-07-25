import Input from "./Input";
import DatePicker from "./DatePicker";
import Button from "./Button";

function ExperienceForm({
  id,
  selfEmployed,
  presentDay,
  responsibilities,
  handleJobTitle,
  handleSelfEmployed,
  handleCompanies,
  handlStartMonth,
  handleStartYear,
  handlEndMonth,
  handleEndYear,
  handlePresentDay,
  handleResponsibilities,
  handleNewResponsibility,
  handleDeleteResponsibility,
  handleDeleteForm,
}) {
  return (
    <>
      <Input
        label="Job title"
        id={"job-title-" + id}
        required={true}
        onChange={(e) => handleJobTitle(id, e)}
      />
      <Input
        label="Self-employed?"
        id={"self-employed-" + id}
        type="checkbox"
        onChange={(e) => handleSelfEmployed(id, e)}
      />
      <Input
        label="Company"
        id={"company-" + id}
        required={!selfEmployed}
        onChange={(e) => handleCompanies(id, e)}
      />
      <div>
        <DatePicker
          id={id}
          startOrEnd="start"
          onChangeMonth={(e) => handlStartMonth(id, e)}
          onChangeYear={(e) => handleStartYear(id, e)}
        />
      </div>
      <div>
        {!presentDay && (
          <div>
            <DatePicker
              id={id}
              startOrEnd="end"
              onChangeMonth={(e) => handlEndMonth(id, e)}
              onChangeYear={(e) => handleEndYear(id, e)}
            />
          </div>
        )}
        <Input
          label="Present day?"
          id={"present-day-" + id}
          type="checkbox"
          onChange={(e) => handlePresentDay(id, e)}
        />
      </div>

      <fieldset>
        <legend>Job Responsibilities</legend>
        {responsibilities.length > 0 &&
          responsibilities.map((item) => {
            return (
              <div key={item.id}>
                <label htmlFor={item.id}>
                  <textarea
                    name={item.id}
                    id={item.id}
                    onChange={(e) => handleResponsibilities(id, item.id, e)}
                  ></textarea>
                </label>
                <Button
                  label="X"
                  type="button"
                  ariaLabel="delete responsibility"
                  onClick={() => handleDeleteResponsibility(id, item.id)}
                />
              </div>
            );
          })}
        {/* Continue this */}
        <Button
          label="+ Add Responsibility"
          type="button"
          onClick={() => handleNewResponsibility(id)}
        />
      </fieldset>

      <Button
        label="- Delete Job"
        onClick={() => handleDeleteForm(id)}
        type="button"
      />
    </>
  );
}

export default ExperienceForm;
