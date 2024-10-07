import './App.css';
import List from "./components/List/List.tsx";

const App = () => {
    return (
        <div>
            <h1>
                My Hacker Stories
            </h1>

            <label htmlFor="search">Search</label>
            <input id='search' type="text"/>

            <hr/>

            <List />
        </div>
    );
};

export default App;
