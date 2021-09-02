import "./style.css";

const Section = ({ title, extraButtons, body }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__title">{title}</h2>
            {extraButtons}
        </header>
            {body}
    </section>

);

export default Section;