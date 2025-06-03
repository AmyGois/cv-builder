function Input({ label, id, type = "text", accept }) {
  return (
    <>
      <label htmlFor={id}>
        {label + " "}
        <input type={type} name={id} id={id} accept={accept} />
      </label>
    </>
  );
}

export default Input;
