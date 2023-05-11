// import dummydata from '../dummydata.json'
import { Card, CardContent, Button, CardHeader, Divider } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import cookie from 'cookie'
import { useCallback, useEffect } from 'react'
import axios from "axios"

function Dashboard(props) {
    const cookies = cookie.parse(document.cookie)
    console.log(props)

    return (
        <div className="card-container" onClick={props.getAllNotes}>
            {props.notes.map((note, idx) => (
                <Card key={idx} className="card" style={{ backgroundColor: '#6a1b9a', color: 'whitesmoke', borderRadius: '15px', display: 'flex', flexDirection: 'column' }}>
                    <CardHeader style={{ backgroundColor: '#4a126b', color: 'whitesmoke' }} />
                    <CardContent style={{ paddingTop: 0, paddingBottom: "15px" }}>
                        <Link to={`/note/${note.id}`}>
                            <h1 style={{ border: 0, padding: 0, margin: 0 }}>{note.title}</h1>
                        </Link>
                        <br />
                        <span>To: {note.recipient}</span><br />
                        <Divider style={{ border: '0px', paddingBottom: "15px", borderTopColor: 'white', borderTop: "1px solid" }} />
                        <span style={{ fontStyle: 'italic' }}>{note.note}</span>
                        <Divider style={{ border: '0px', paddingBottom: "15px", borderTopColor: 'white', borderTop: "1px solid" }} />
                        <span style={{ display: 'flex', flexDirection: 'row-reverse' }}>From: {note.author} <br></br>{note.doc}</span>
                    </CardContent>
                </Card>
            ))}

            <Card style={{ backgroundColor: '#6a1b9a', color: 'whitesmoke', borderRadius: '15px', display: 'flex', flexDirection: 'column', marginTop: '25px', marginRight: '25px', alignContent: "center", height: 'fit-content' }}>
                <CardHeader style={{ backgroundColor: '#4a126b', color: 'whitesmoke' }} />
                <CardContent style={{ paddingTop: 0, paddingBottom: "15px", display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                    <h1 style={{ border: 0, padding: 0, margin: 0 }}>Make a Note?</h1>
                    {cookies["loggedIn"] === 'true' ?
                        <Button style={{ color: 'white', backgroundColor: '#bb33ff', display: 'flex', marginTop: "auto", marginBottom: ".25vh" }} variant='contained'>
                            <Link to={`/makeanote`}>Create one here</Link>
                        </Button> :
                        <Button style={{ color: 'white', backgroundColor: '#bb33ff', marginBottom: '-25vh' }} variant='contained'>
                            <Link to={'/'}>Log in to create one!</Link>
                        </Button>}
                </CardContent>
            </Card>
        </div>
    )
}

export default Dashboard