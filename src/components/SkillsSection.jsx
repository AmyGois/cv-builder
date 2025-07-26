import SkillsForm from "./SkillsForm";
import Button from "./Button";

function SkillsSection({ skillsProps }) {
  return (
    <>
      <h2>Skills</h2>
      {skillsProps.skills.map((skill) => {
        return (
          <form key={skill.id}>
            <SkillsForm
              id={skill.id}
              handleSkill={skillsProps.handleSkills}
              handleLevel={skillsProps.handleLevels}
              handleDeleteForm={skillsProps.handleDeleteForm}
            />
          </form>
        );
      })}
      <Button label="+ Add Skill" onClick={skillsProps.handleNewForm} />
    </>
  );
}

export default SkillsSection;
