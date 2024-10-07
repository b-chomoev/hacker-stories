import './App.css';
import List from "./components/List/List.tsx";
import Search from "./components/Search/Search.tsx";

const App = () => {
    return (
        <div>
            <h1>
                My Hacker Stories
            </h1>

            <Search />
            <hr/>
            <List />
        </div>
    );
};

export default App;
