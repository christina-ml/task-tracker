import { useState } from 'react'

const Tasks = () => {
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
        <>
            {tasks.map((task)=> (
            <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
