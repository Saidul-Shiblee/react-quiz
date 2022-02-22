import "../Styles/App.css";
import Layout from "./Layout";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
