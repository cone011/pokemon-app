const CustomButton = (props) => {
  const { typeButton, className, onClickEvent, children } = props;
  return (
    <button className={className} type={typeButton} onClick={onClickEvent}>
      {children}
    </button>
  );
};

export default CustomButton;
