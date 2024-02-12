import { Box, Button, Link, TextField } from "@mui/material";
import { useState } from "react";

const RegistrationPage = () => {
    const [nameField, setNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [passwordField, setPasswordField] = useState("");

    const handleNameFieldChange = (e) => {
        setNameField(e);
    };

    const handleEmailFieldChange = (e) => {
        setEmailField(e);
    };

    const handlePasswordFieldChange = (e) => {
        setPasswordField(e);
    };

    return (
        <Box component="form">
            <Link href="/">To main page</Link>
            <TextField
                required
                label="Name"
                value={nameField}
                onChange={(e) => handleNameFieldChange(e)}
            />
            <TextField
                required
                label="Email"
                type="email"
                value={emailField}
            />
            <TextField
                required
                label="Password"
                type="password"
                value={passwordField}
            />
            <Button variant="contained">
                Register
            </Button>
            <Link href="/login">Already have account? Sign in</Link>
        </Box>
    );
};

export default RegistrationPage;