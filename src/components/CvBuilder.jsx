import GeneralForm from "./GeneralForm";

function CvBuilder({ generalProps }) {
  return (
    <>
      <div>
        <GeneralForm generalProps={generalProps} />
      </div>
    </>
  );
}

export default CvBuilder;
