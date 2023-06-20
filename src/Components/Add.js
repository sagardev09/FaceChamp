import { Avatar, Box, Button, Divider, Fab, FormControl, InputLabel, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Modal, Select, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import { Add as AddIcon, Close, EmojiEmotions, EmojiFlags, LocationOn, MoreHoriz, PersonAdd, Photo } from "@mui/icons-material"
import useStyles from '../Styles'


const Add = () => {
    const [openAdd, setopenAdd] = useState(false)
    const [view, setview] = useState("")

    const classes = useStyles()
    return (
        <>
            <Tooltip onClick={(e) => setopenAdd(true)} title="Add Post" sx={{ position: "fixed", bottom: { xs: "3rem", sm: "1rem" }, right: { xs: "2rem", sm: "2rem" } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                open={openAdd}
                onClose={(e) => setopenAdd(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal} sx={{ backgroundColor: { xs: "white", sm: "background.default" } }} color={"text.primary"} >
                    <Box className={classes.upper}>
                        <Box></Box>
                        <Typography variant='h5' color={"primary"}>Create post</Typography>
                        <Fab color="primary" aria-label="add" sx={{ height: "40px", width: "40px" }} onClick={(e) => setopenAdd(false)} >
                            <Close />
                        </Fab>
                    </Box>
                    <Divider style={{ backgroundColor: "#f7fafc" }} ></Divider>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0.3rem", }}>
                        <List sx={{ width: '100%', maxWidth: 260, }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText sx={{ margin: "15px 0 0 0" }}
                                    primary="Sagar Dabas"
                                />
                            </ListItem>
                        </List>
                        <FormControl sx={{ width: "100%", maxWidth: { sm: "150px", xs: "100px" } }} >
                            <InputLabel id="demo-simple-select-label" sx={{ fontSize: { sm: "15px", xs: "12px" } }}>Public</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={view}
                                label="Public"
                                onChange={(e) => setview(e.target.value
                                )}
                            >
                                <MenuItem value={10}>Public</MenuItem>
                                <MenuItem value={20}>Private</MenuItem>
                                <MenuItem value={30}>Only to followers</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box className={classes.post} sx={{ backgroundColor: { xs: "white", sm: "background.default" } }}>
                        <TextField className={classes.field}
                            id="outlined-multiline-static"
                            multiline
                            rows={6}
                            variant='standard'

                            placeholder='Whats on your Mind, Sagar?'
                        />
                    </Box>
                    <Box className={classes.add} sx={{ backgroundColor: { xs: "white", sm: "background.default" } }}>
                        <Stack direction={"row"}>
                            <Typography sx={{ display: { xs: "none", sm: "block" } }}>Add to your post</Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                            <Photo color='error' />
                            <PersonAdd color='info' />
                            <EmojiEmotions color='primary' />
                            <LocationOn color='secondary' />
                            <EmojiFlags color='success' />
                            <MoreHoriz color='warning' />
                        </Stack>
                    </Box>
                    <Box>
                        <Button className={classes.btns} sx={{ maxWidth: "760px", margin: { sm: "0 20px 0 20px", xs: "0 " }, }} variant='contained' color='primary'>Post</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default Add
