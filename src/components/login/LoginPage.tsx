import { Box, Button, Link, TextField } from '@mui/material'

const LoginPage = () => {
    return (
        <Box component="form">
            <Link href="/">To main page</Link>
            <TextField
                required
                label="Email"
                type="email"
            />
            <TextField
                required
                label="Password"
                type="password"
            />
            <Button variant="contained">
                Sign In
            </Button>
            <Link href="/signup">Register</Link>
        </Box>
    )
}

export default LoginPage