import "./Button.scss";

export const Button = ({
  children,
  variant = "primary" | "outline" | "light" | "white",
  onClick,
}) => {
  return (
    <button className={`${variant}`} onClick={onClick}>
      <span> {children}</span>
    </button>
  );
};
