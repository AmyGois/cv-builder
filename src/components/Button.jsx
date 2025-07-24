function Button({ label, onClick, type, ariaLabel }) {
  return (
    <>
      <button onClick={onClick} type={type} aria-label={ariaLabel}>
        {label}
      </button>
    </>
  );
}

export default Button;
