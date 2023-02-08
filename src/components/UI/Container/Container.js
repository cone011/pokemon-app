const Container = (props) => {
  const { classStyle, children } = props;
  return <div className={classStyle}>{children}</div>;
};

export default Container;
