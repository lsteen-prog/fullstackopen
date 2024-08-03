import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const initial_array = new Array(8).fill(0)
  const [votes, setVotes] = useState(initial_array)

  const [most_voted, setMostVoted] = useState(0)

  let mostVoted = 0
  let mostVotes = 0

  const updateVote = (selected) => {
    const new_votes = [...votes]
    new_votes[selected] += 1
    setVotes(new_votes)
    if (new_votes[selected] > new_votes[most_voted]) {
      setMostVoted(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>

      <div>
        <button onClick={() => setSelected(Math.floor(Math.random() * 8))}>next anecdote</button>
        <button onClick={() => updateVote(selected)}>vote</button>
      </div>
      <h1>
        Anecdote with most votes
      </h1>
      <div>
        {anecdotes[most_voted]}
      </div>
      <div>
        has {votes[most_voted]} votes
      </div>
    </div>
  )
}

export default App