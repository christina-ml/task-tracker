import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Oct 25th at 2:20pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at Pursuit',
        day: 'Oct 27th at 10:00am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Oct 26th at 1:00pm',
        reminder: false,
    }
  ])

  return (
    <div className='"container"'>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
