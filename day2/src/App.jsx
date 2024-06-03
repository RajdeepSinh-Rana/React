import './App.css';
import Counter from './Counter';
import Voting from './Voting';
import UserProfile from './UserProfile'

function App() {
  return (
    <div className="App">
        <Counter/>
        <Voting />
        <UserProfile/>
    </div>
  );
}

export default App;
