const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
        product: 'Game',
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
        product: 'App',
    },
];

const List = () => (
    <ul>
        {list.map(i => (
            <li key={i.objectID}>Title: <a href={i.url}>{i.title}</a>
                <ul>
                    <li>Author: {i.author}</li>
                    <li>Comments: {i.num_comments}</li>
                    <li>Points: {i.points}</li>
                    <li>Product: {i.product}</li>
                </ul>
            </li>
        ))}
    </ul>
);

export default List;