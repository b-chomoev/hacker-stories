import './App.css'

const getTitle = (title: string) => {
    return title;
}

const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];


const App = () => {
    return (
        <div>
            <h1>
                Hello {getTitle('React')};
            </h1>

            <label htmlFor="search">Search</label>
            <input id='search' type="text"/>

            <ul>
                {fruits.map(fruit => (
                    <li>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default App
