import { Card, CardContent, Button, CardHeader, Divider } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import cookie from 'cookie'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAllNotes } from '../redux/actions';

function Dashboard(props) {
    const cookies = cookie.parse(document.cookie)
    const dispatch = useDispatch()
    const notes = props.notes
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);
    useEffect(() => {
        async function fetchData() {
            await dispatch(getAllNotes())
        }
        fetchData()
    }, [dispatch]);

    function deleteCard(noteID) {
        console.log(noteID)
        props.deleteNote(noteID)
        window.location.reload(false);
    }

    return (
        <div className="card-container">
            {notes.map((note, idx) => (
                <div key={idx}>
                    {note.isHidden === 0 &&
                        <Card key={idx} className="card"
                            style={{ backgroundColor: '#6a1b9a', color: 'whitesmoke', borderRadius: '15px', display: 'flex', flexDirection: 'column' }}
                            onMouseEnter={() => setSelected(idx)}
                            onMouseLeave={() => setSelected(null)}>
                            <div>
                                <CardHeader style={{ backgroundColor: '#4a126b', color: 'whitesmoke' }} />
                                <CardContent style={{ paddingTop: 0, paddingBottom: "15px" }}>
                                    {(selected === idx && (note.author == cookies["username"] || note.recipient == cookies["username"])) && (
                                        <button onClick={() => (
                                            deleteCard(note.ID)
                                            )}>
                                            Delete?
                                        </button>
                                    )}
                                    <h1 style={{ border: 0, padding: 0, margin: 0 }}>{note.title}</h1>
                                    <br />
                                    <span>To: {note.recipient}</span><br />
                                    <Divider style={{ border: '0px', paddingBottom: "15px", borderTopColor: 'white', borderTop: "1px solid" }} />
                                    <span style={{ fontStyle: 'italic' }}>{note.note}</span>
                                    <Divider style={{ border: '0px', paddingBottom: "15px", borderTopColor: 'white', borderTop: "1px solid" }} />
                                    <span style={{ display: 'flex', flexDirection: 'row-reverse' }}>From: {note.author} <br></br>{new Date(note.doc).toLocaleString('en-US', { timeZone: 'America/Chicago' })}</span>
                                </CardContent>
                            </div>
                        </Card>
                    }
                </div>
            ))}

            <Card style={{ backgroundColor: '#6a1b9a', color: 'whitesmoke', borderRadius: '15px', display: 'flex', flexDirection: 'column', marginTop: '25px', marginRight: '25px', alignContent: "center", height: 'fit-content' }}>
                <CardHeader style={{ backgroundColor: '#4a126b', color: 'whitesmoke' }} />
                <CardContent style={{ paddingTop: 0, paddingBottom: "15px", display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                    <h1 style={{ border: 0, padding: 0, margin: 0 }}>Make a Note?</h1>
                    {cookies["loggedIn"] === 'true' ?
                        <Button style={{ color: 'white', backgroundColor: '#bb33ff', display: 'flex', marginTop: "auto", marginBottom: ".25vh" }} variant='contained'>
                            <Link to={`/makeanote`}>Create one here</Link>
                        </Button> :
                        <Button style={{ color: 'white', backgroundColor: '#bb33ff' }} variant='contained'>
                            <Link to={'/'}>Log in to create one!</Link>
                        </Button>}
                </CardContent>
            </Card>
        </div>
    )
}

export default Dashboard