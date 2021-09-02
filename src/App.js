


function App() {
  return (
    <div classNameName="App">
      <div className="contianer">
        <header className="header">
          <h1 className="header__title">Lista Zadań</h1>
        </header>
        <main>
          <section className="section">
            <header className="section__header">
              <h2 className="section__title">Dodaj nowe zadanie</h2>
            </header>
            <form className="form">
              <input type="text" className="form__input" placeholder="Co jest do zrobienia?" autofocus />
              <button className="form__button" type="submit">Dodaj zadanie</button>
            </form>
          </section>
          <section className="section">
            <header className="section__header">
              <h2 className="section__title">Lista zadań</h2>
              <div className="section__buttons"></div>
            </header>
            <ul className="list"></ul>
          </section>
          <footer className="footer">
            Coded by Patryk Krawczyk &copy; 2021
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
