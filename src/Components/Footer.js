import useOnline from "../Utils/useOnline";

const Footer = () => {
  const isOnline = useOnline();
  const date = new Date();
  return (
    <footer>
      <div className="containerInner">
        <div className="logo">
          Iconic Foodi
          <p>
            Disclaimer: This website is created only for Education and learning
            purposes only for developer use
          </p>
        </div>
        <div className="year">
          Copywrites &copy; {date.getFullYear()}{" "}
          <span data-testid="onlineStatus">{isOnline ? "✅" : "🟥"}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
