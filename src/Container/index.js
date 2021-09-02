import "./style.css"

const Container = ({header, section, section2, footer}) => (
    <div className="container">
        {header}
        <main>
            {section}
            {section2}
        </main>
        {footer}
    </div>
);

export default Container;