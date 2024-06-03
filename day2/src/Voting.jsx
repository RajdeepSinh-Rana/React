import { useState } from 'react';
import './Voting.css'

const Voting = () => {
  const [BJP, setBJP] = useState(0);
  const [Congress, setCongress] = useState(0);
  const [result, setResult] = useState('');

  const handleVoteOptionOne = () => {
    setBJP(BJP + 1);
  };

  const handleVoteOptionTwo = () => {
    setCongress(Congress + 1);
  };

  const handleGetResult = () => {
    if (BJP > Congress) {
      setResult('BJP is leading');
    } else if (Congress > BJP) {
      setResult('Congress is leading');
    } else {
      setResult('Both options are tied');
    }
  };

  return (
    <div>
      <h1>Vote for Your Favorite Option</h1>
      <div>
        <button onClick={handleVoteOptionOne}>BJP</button>
        <span>Votes: {BJP}</span>
      </div>
      <div>
        <button onClick={handleVoteOptionTwo}>Congress</button>
        <span>Votes: {Congress}</span>
      </div>
      <div>
        <button onClick={handleGetResult}>Get Result</button>
      </div>
      {result && (
        <div>
          <h2>Result</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Voting;
