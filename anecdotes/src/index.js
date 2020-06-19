import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const rand = () => {
    return Math.floor(Math.random()*6);
}

const App = (props) => {
    const [clicks, setClicks] = useState({
        selected: 0, vote: Array(6).fill(0)
    })

    const handleNextAnecdoteClick=()=> {
        const newClicks = {
            ...clicks,
            selected: rand()
            }
        setClicks(newClicks)
    }



    const handleVoteClick=()=> {
        const voteCopy = [...clicks.vote];
        voteCopy[clicks.selected]+=1;
        const newClicks = {
            ...clicks,
            vote: voteCopy
        }
        setClicks(newClicks)
    }

    const mostVotedAnecdote = () => { 
        const indexWithMostVotes = clicks.vote.indexOf(Math.max(...clicks.vote));
        const reapetableMostVotes = [];
        for(let i=0; i<6; i++) {if(clicks.vote[i]===clicks.vote[indexWithMostVotes]) reapetableMostVotes.push(anecdotes[i])}
        const randomRepeat = () => {
            return Math.floor(Math.random()*reapetableMostVotes.length);
        }
        return reapetableMostVotes[randomRepeat()];
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {anecdotes[clicks.selected]} 
            <p>Has {clicks.vote[clicks.selected]} votes</p>
            <table>
                <tbody><tr><td><button onClick={handleVoteClick}> Vote </button></td>
                <td><button onClick={handleNextAnecdoteClick}>Next anecdote</button></td></tr></tbody>
            </table>
            <h1>Anecdote with most votes</h1>
            {mostVotedAnecdote()}
        </div>
)
}

ReactDOM.render(
<App anecdotes={anecdotes} />,
document.getElementById('root')
)