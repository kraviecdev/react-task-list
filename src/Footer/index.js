import "./style.css";

const Footer = ({year, name}) => (
    <footer className="footer">
        {`Coded by`} {name} &copy; {year}
    </footer>
);

export default Footer;