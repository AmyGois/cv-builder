import LanguageForm from "./LanguageForm";
import Button from "./Button";

function LanguageSection({ languageProps }) {
  return (
    <>
      <h2>Languages</h2>
      {languageProps.languages.map((language) => {
        return (
          <form key={language.id}>
            <LanguageForm
              id={language.id}
              handleLanguage={languageProps.handleLanguages}
              handleLevel={languageProps.handleLevels}
              handleCertification={languageProps.handleCertifications}
              handleDeleteForm={languageProps.handleDeleteForm}
            />
          </form>
        );
      })}
      <Button label="+ Add Language" onClick={languageProps.handleNewForm} />
    </>
  );
}

export default LanguageSection;
