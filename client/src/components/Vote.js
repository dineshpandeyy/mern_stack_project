import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.


function Vote() {

  const [vote, setVote] = useState(0);
  
  const UpVoteHandler = function(e) {
    setVote(function(){
      return (vote + 1)
    })
  }
  
  const DownVoteHandler = function(e) {
    setVote(function(){
      return (vote - 1)
    })
  }
  
  return (
    <div>
    <button onClick={UpVoteHandler} class="glyphicon glyphicon-arrow-up"> Up </button>
    &nbsp;{vote}&nbsp;
    <button onClick={DownVoteHandler}> Down </button>
    </div>
  );
}

export default Vote