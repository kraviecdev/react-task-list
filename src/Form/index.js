import React = require("react");

const Form = () => (
    <form className="form">
        <input type="text" className="form__input" placeholder="Co jest do zrobienia?" autofocus />
        <button className="form__button" type="submit">Dodaj zadanie</button>
    </form>
);

export default Form;