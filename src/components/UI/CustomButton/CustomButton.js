const CustomButton = (props) => {
  const { typeButton, className, children } = props;
  return (
    <button className={className} type={typeButton}>
      {children}
    </button>
  );
};

export default CustomButton;
