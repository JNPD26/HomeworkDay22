import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 3, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-number"
                    label="จำนวน"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    color="error" focused
                />
            </div>
        </Box>
    );
}