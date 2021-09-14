import "./style.css";

const Section = ({ title, additionalContent, body }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__title">{title}</h2>
            {additionalContent}
        </header>
            {body}
    </section>
);

export default Section;