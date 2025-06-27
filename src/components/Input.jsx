function Input({ label, id, type = "text", accept, required }) {
  return (
    <>
      <label htmlFor={id}>
        {label + " "}
        {required === false && <span>(Optional) </span>}
        <input
          type={type}
          name={id}
          id={id}
          accept={accept}
          required={required}
        />
      </label>
    </>
  );
}

export default Input;
