import React from 'react'
import { Modal, Paper, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'
import axios from 'axios'


export default function MaterialModal({ show, handleModalClose }) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    const [workdayId, setWorkdayId] = useState("")
    const [name, setName] = useState("")
    const [site, setSite] = useState("")
    const [concern, setConcern] = useState("")

    const onSubmit = async (e) => {

        e.preventDefault()
        console.log(workdayId)
        await axios.post("http://localhost:8080/callHR", { workdayId, name, site, concern })


        handleModalClose()

    }

    return (
        <div><Modal
            open={show}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Paper style={{
                    width: '300px', height: '440px', backgroundColor: 'white', borderColor: 'white'
                }} variant="outlined">
                    <div style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '30px' }}>
                        <h1>Concern Details</h1>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <TextField id="outlined-basic" name="workdayId" label="Workday ID" variant="outlined" style={{ marginBottom: '10px' }} onChange={(e) => setWorkdayId(e.target.value)} />
                            <TextField id="outlined-basic" name="name" label="Name" variant="outlined" style={{ marginBottom: '10px' }} onChange={(e) => setName(e.target.value)} />
                            <TextField id="outlined-basic" name="site" label="Site" variant="outlined" style={{ marginBottom: '10px' }} onChange={(e) => setSite(e.target.value)} />
                            <TextField id="outlined-multiline-flexible" name="concern" label="Concern" multiline rows={3} style={{ marginBottom: '15px', width: '205px' }} onChange={(e) => setConcern(e.target.value)} />

                            <button type="submit" className='btn btn-outline-primary'> Join Queue </button>
                        </form>
                    </div>
                </Paper>
            </Box>
        </Modal ></div >
    )
}
