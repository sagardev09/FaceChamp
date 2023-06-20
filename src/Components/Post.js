import React from 'react'
import { Bookmark, BookmarkBorder, ChatBubbleOutline, Favorite, FavoriteBorder, MoreVert, Send, } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Post = () => {
    return (
        <div>
            <Card sx={{ margin: "0 0 25px 0" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <CardActions disableSpacing sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", }}>
                        <IconButton aria-label="add to favorites">
                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} />
                        </IconButton>
                        <IconButton aria-label="share">
                            <Checkbox icon={<ChatBubbleOutline />} checkedIcon={<ChatBubbleOutline />} />

                        </IconButton>
                        <IconButton aria-label="share">
                            <Checkbox icon={<Send />} checkedIcon={<Send />} />

                        </IconButton>
                    </CardActions>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Checkbox
                                icon={<BookmarkBorder />}
                                checkedIcon={<Bookmark sx={{ color: "black" }} />}
                            />
                        </IconButton>
                    </CardActions>
                </Box>
            </Card>
        </div>
    )
}

export default Post
