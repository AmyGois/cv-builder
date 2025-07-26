import Input from "./Input";
import Button from "./Button";

function SkillsForm({ id, handleSkill, handleLevel, handleDeleteForm }) {
  return (
    <>
      <Input
        label="Skill"
        id={"skill-name-" + id}
        required={true}
        onChange={(e) => handleSkill(id, e)}
      />
      <label htmlFor={"skill-level-" + id}>
        {"Level "}
        <select
          name={"skill-level-" + id}
          id={"skill-level-" + id}
          onChange={(e) => handleLevel(id, e)}
        >
          <option value="">Choose level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </select>
      </label>
      <Button
        label="- Delete Skill"
        type="button"
        onClick={() => handleDeleteForm(id)}
      />
    </>
  );
}

export default SkillsForm;
