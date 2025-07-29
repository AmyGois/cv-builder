function CvResult({
  generalProps,
  workProps,
  educationProps,
  skillsProps,
  languageProps,
}) {
  return (
    <>
      <div className="cv-header">
        {generalProps.photo !== null && (
          <div>
            <img src={generalProps.photo} alt="Profile picture" />
          </div>
        )}

        <div>
          <h2>{generalProps.name === "" ? "Your Name" : generalProps.name}</h2>
          {generalProps.jobTitle !== "" && (
            <div>
              <span>{generalProps.jobTitle}</span>
            </div>
          )}
          {generalProps.address !== "" && (
            <div>
              <span>{generalProps.address}</span>
            </div>
          )}
        </div>

        {(generalProps.phone !== "" ||
          generalProps.email !== "" ||
          generalProps.portfolio !== "") && (
          <div>
            {generalProps.phone !== "" && (
              <div>
                <span>{generalProps.phone}</span>
              </div>
            )}
            {generalProps.email !== "" && (
              <div>
                <span>{generalProps.email}</span>
              </div>
            )}
            {generalProps.portfolio !== "" && (
              <div>
                <span>{generalProps.portfolio}</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="cv-main">
        {workProps.jobTitles.length > 0 && (
          <div className="cv-work-experience">
            <h3>Work Experience</h3>
            {workProps.jobTitles.map((job) => {
              const selfEmployed = workProps.selfEmployed.find(
                (item) => item.id === job.id
              ).selfEmployed;
              const company = workProps.companies.find(
                (item) => item.id === job.id
              ).company;
              const startDate = workProps.startDates.find(
                (item) => item.id === job.id
              );
              const endDate = workProps.endDates.find(
                (item) => item.id === job.id
              );
              const responsibilities = workProps.responsibilities.find(
                (item) => item.id === job.id
              ).responsibilities;

              return (
                <div key={job.id}>
                  <h4>{job.jobTitle}</h4>
                  <div>
                    <span>
                      {company}
                      {company !== "" && selfEmployed === true && " - "}
                      {selfEmployed === true && "Self-employed"}
                    </span>
                  </div>
                  <div>
                    <span>
                      {startDate.month}
                      {startDate.month !== "" && "/"}
                      {startDate.year + " - "}
                      {endDate.presentDay === true && "Present"}
                      {endDate.presentDay === false && endDate.month}
                      {endDate.presentDay === false &&
                        endDate.month !== "" &&
                        "/"}
                      {endDate.presentDay === false && endDate.year}
                    </span>
                  </div>
                  <ul>
                    {responsibilities.map((responsibility) => (
                      <li key={responsibility.id}>
                        {responsibility.responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        {educationProps.courses.length > 0 && (
          <div className="cv-education">
            <h3>Education</h3>
            {educationProps.courses.map((course) => {
              const level = educationProps.levels.find(
                (item) => item.id === course.id
              ).level;
              const endDate = educationProps.endDates.find(
                (item) => item.id === course.id
              );
              const school = educationProps.schools.find(
                (item) => item.id === course.id
              ).school;

              return (
                <div key={course.id}>
                  <div>
                    <h4>{course.course}</h4>
                    <span>{level}</span>
                  </div>
                  <div>
                    {endDate.stillStudying === true && (
                      <span>Currently studying</span>
                    )}
                    {endDate.stillStudying === false && (
                      <span>
                        {endDate.month}
                        {endDate.month !== "" && "/"}
                        {endDate.year}
                      </span>
                    )}
                  </div>
                  <div>
                    <span>{school}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {skillsProps.skills.length > 0 && (
          <div className="cv-skills">
            <h3>Skills</h3>
            {skillsProps.skills.map((skill) => {
              const level = skillsProps.levels.find(
                (item) => item.id === skill.id
              ).level;

              return (
                <div key={skill.id}>
                  <h4>{skill.skillName}</h4>
                  <span>{level}</span>
                </div>
              );
            })}
          </div>
        )}

        {languageProps.languages.length > 0 && (
          <div className="cv-languages">
            <h3>Languages</h3>
            {languageProps.languages.map((language) => {
              const level = languageProps.levels.find(
                (item) => item.id === language.id
              ).level;
              const certification = languageProps.certifications.find(
                (item) => item.id === language.id
              ).certification;

              return (
                <div key={language.id}>
                  <h4>{language.language}</h4>
                  <div>
                    <span>{level}</span>
                  </div>
                  {certification !== "" && (
                    <span>{"Certificate: " + certification}</span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default CvResult;

/* TO DO:
  - Button to print cv - maybe use window.print() + css sheet with media='print'
*/
