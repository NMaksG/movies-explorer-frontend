function Button({ classN, text }) {
  return (
    <button
      className={classN}
      type="button"
      aria-label="Закрыть"
      // onClick={}
    >
      {text}
    </button>
  );
}

export default Button;