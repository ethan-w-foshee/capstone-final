// import dummydata from '../dummydata.json'
import { Card, CardContent, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'
import MakeANote from '../containers/MakeANote'

function Dashboard(props) {
    console.log(props)
    return (
        <div className="card-container">
            <MakeANote noteTotal={props.notes.length} />
            {props.notes.map((note, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <h1>{note.title} </h1>
                        <span>To: {note.recipient}</span><br/>
                        <span>{note.id}</span>
                    </CardContent>
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/note/${note.id}`}>Go to note</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Dashboard