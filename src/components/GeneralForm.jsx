import Input from "./Input";
import Button from "./Button";

function GeneralForm({ generalProps }) {
  return (
    <>
      <h2>General</h2>
      <form>
        <Input
          label="Your name"
          id="general-name"
          required={true}
          onChange={generalProps.handleName}
        />
        <Input
          label="Job title"
          id="general-job-title"
          required={false}
          onChange={generalProps.handleJobTitle}
        />
        <Input
          label="Email"
          id="general-email"
          type="email"
          required={false}
          onChange={generalProps.handleEmail}
        />
        <Input
          label="Phone"
          id="general-phone"
          type="tel"
          required={false}
          onChange={generalProps.handlePhone}
        />
        <Input
          label="Address"
          id="general-address"
          required={false}
          onChange={generalProps.handleAddress}
        />
        <Input
          label="Portfolio link"
          id="general-portfolio"
          type="link"
          required={false}
          onChange={generalProps.handlePortfolio}
        />
        <div>
          <Input
            label="Photo"
            id="general-photo"
            type="file"
            accept="image/*"
            required={false}
            onChange={generalProps.handlePhoto}
          />
          <Button
            label="X"
            ariaLabel="remove photo"
            type="button"
            onClick={() => generalProps.handleDeletePhoto("general-photo")}
          />
        </div>
      </form>
    </>
  );
}

export default GeneralForm;
