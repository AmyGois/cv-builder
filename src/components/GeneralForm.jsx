import Input from "./Input";

function GeneralForm() {
  return (
    <>
      <h2>General</h2>
      <form>
        <Input label="Your name" id="general-name" required={true} />
        <Input label="Job title" id="general-job-title" required={false} />
        <Input label="Email" id="general-email" type="email" required={false} />
        <Input label="Phone" id="general-phone" type="tel" required={false} />
        <Input label="Address" id="general-address" required={false} />
        <Input
          label="Portfolio link"
          id="general-portfolio"
          type="link"
          required={false}
        />
        <Input
          label="Photo"
          id="general-photo"
          type="file"
          accept="image/*"
          required={false}
        />
      </form>
    </>
  );
}

export default GeneralForm;
