import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Box from '@mui/material/Box';

const Checkout = () => {
    return (
        <>
            <div className="navbar">
                <ResponsiveAppBar />
            </div>
            <div className='checkoutform'>
                <div className='billing address'>
                    <Typography gutterBottom variant="h5" component="div" color="black">
                        Billing Address
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="filled-textarea"
                                label="🧑🏾‍🦱Full Name"
                                placeholder="Harry J. Potter"
                                multiline
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField
                                id="filled-textarea"
                                label="✉️Email"
                                placeholder="harry@example.com"
                                multiline
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField
                                id="filled-textarea"
                                label="📌Address"
                                placeholder="486 M.8 T.ABC"
                                multiline
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField
                                id="filled-textarea"
                                label="🏛️City"
                                placeholder="Sriracha"
                                multiline
                                variant="filled"
                            />
                        </div>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '24.25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="filled-textarea"
                                label="State"
                                placeholder="Chonburi"
                                multiline
                                variant="filled"
                            />
                            <TextField
                                id="filled-textarea"
                                label="Zip"
                                placeholder="10101"
                                multiline
                                variant="filled"
                            />
                        </div>
                    </Box>
                </div>
                <div className='payment'>
                    <Typography gutterBottom variant="h5" component="div" color="black">
                        Payment
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '30ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="filled-textarea"
                                label="🪪Name on Card"
                                placeholder="Harry James Potter"
                                multiline
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField
                                id="filled-textarea"
                                label="💳Card Number"
                                placeholder="1111-2222-3333-4444"
                                multiline
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField
                                id="filled-textarea"
                                label="Exp Month"
                                placeholder="November"
                                multiline
                                variant="filled"
                            />
                        </div>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '14.25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="filled-textarea"
                                label="Exp Year"
                                placeholder="2025"
                                multiline
                                variant="filled"
                            />
                            <TextField
                                id="filled-textarea"
                                label="CVV"
                                placeholder="285"
                                multiline
                                variant="filled"
                            />
                        </div>
                    </Box>
                </div>
            </div>
            <div className='checkboxfoot'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Shipping address same as billing" />
                </FormGroup>
            </div>
            <button className='Continue-to-checkout'>Continue to checkout</button>
        </>
    );
}
export default Checkout;