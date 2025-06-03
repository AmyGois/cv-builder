import Input from "./Input";
import OptionalFormItem from "./OptionalFormItem";

function GeneralForm() {
  return (
    <>
      <h2>General</h2>
      <form>
        <Input label="Your name" id="general-name" />
        <OptionalFormItem>
          <Input label="Job title" id="general-job-title" />
        </OptionalFormItem>
        <OptionalFormItem>
          <Input label="Email" id="general-email" type="email" />
        </OptionalFormItem>
        <OptionalFormItem>
          <Input label="Phone" id="general-phone" type="tel" />
        </OptionalFormItem>
        <OptionalFormItem>
          <Input label="Address" id="general-address" />
        </OptionalFormItem>
        <OptionalFormItem>
          <Input label="Portfolio link" id="general-portfolio" type="link" />
        </OptionalFormItem>
        <OptionalFormItem>
          <Input
            label="Photo"
            id="general-photo"
            type="file"
            accept="image/*"
          />
        </OptionalFormItem>
      </form>
    </>
  );
}

export default GeneralForm;
