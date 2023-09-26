const CounterButton = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default CounterButton;
