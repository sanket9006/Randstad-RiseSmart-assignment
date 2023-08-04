import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FaBars } from 'react-icons/fa'; // Importing the Font Awesome Bars icon
import { Input } from '@mui/material';


export default function ButtonAppBar({ text, setText }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <FaBars /> {/* Using the Font Awesome Bars icon */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        randstad risesmart
                    </Typography>
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={text}
                        onChange={(e) => { setText(e.target.value) }}
                        style={{ backgroundColor: 'white', padding: 2, borderRadius: 5 }} // Add white background color
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
