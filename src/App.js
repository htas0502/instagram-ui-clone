import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';

function App() {
    return (
        <div className="bg-gray-500 w-full h-auto flex">
            <Sidebar />
            <Container />
        </div>
    );
}

export default App;
