import Input from "./Input";
import Button from "./Button";

function LanguageForm({
  id,
  handleLanguage,
  handleLevel,
  handleCertification,
  handleDeleteForm,
}) {
  return (
    <>
      <Input
        label="Language"
        id={"language-" + id}
        required={true}
        onChange={(e) => handleLanguage(id, e)}
      />
      <label htmlFor={"language-level-" + id}>
        {"Level "}
        <select
          name={"language-level-" + id}
          id={"language-level-" + id}
          onChange={(e) => handleLevel(id, e)}
        >
          <option value="">Choose level</option>
          <option value="a1-beginner">A1 - Beginner</option>
          <option value="a2-elementary">A2 - Elementary</option>
          <option value="b1-intermediate">B1 - Intermediate</option>
          <option value="b2-upper-intermediate">B2 - Upper Intermediate</option>
          <option value="c1-advanced">C1 - Advanced</option>
          <option value="c2-proficiency">C2 - Proficiency</option>
        </select>
      </label>
      <Input
        label="Certification"
        id={"certificatiion-" + id}
        required={false}
        onChange={(e) => handleCertification(id, e)}
      />
      <Button
        label="- Delete Language"
        type="button"
        onClick={() => handleDeleteForm(id)}
      />
    </>
  );
}

export default LanguageForm;
