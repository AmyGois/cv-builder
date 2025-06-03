function OptionalFormItem({ children }) {
  return (
    <div>
      {children}
      <span>(optional)</span>
    </div>
  );
}

export default OptionalFormItem;
