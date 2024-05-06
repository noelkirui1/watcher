import './App.css';

function App() {
  // Navbar component
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// About component
const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Welcome to watchflix! We provide a wide range of movies and TV series for you to enjoy.</p>
    </div>
  );
};
  return (
    <div className="App">
      <header className="App-header">
        <h1>watchflix</h1>
        <Navbar />
      </header>
      <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact>
            <h2>Home Page</h2>
            {/* Add content for home page */}
          </Route>
      </Switch>
      </div>
  );
}

export default App;

// noel