export const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} style={style.button}>
      {title}
    </button>
  );
};

const style = {
  button: {
    width: "50px",
    height: "50px",
    marginRight: "50px",
    marginLeft: "50px",
    fontSize: "45px",
    textAlign: "center",
  },
};
