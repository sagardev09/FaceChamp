
import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'

const Feed = () => {
    return (
        <Box flex={4} p={2} sx={{
            padding: {
                xs: "5rem 1rem 0 0", sm: "5rem 0 0 0"
            }
        }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
    )
}

export default Feed
