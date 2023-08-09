import ResponsiveAppBar from "../components/ResponsiveAppBar"
import redminote12pro5g from "../assets/images/redminote12pro5g.jpg"
import RadioGroupRating from "../components/Rating"
import FormPropsTextFields from "../components/Textfield"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

const Aboutredminote12pro5g = () => {
    return (
        <>
            <div className="navbar">
                <ResponsiveAppBar />
            </div>
            <div className="contentimg">
                <img src={redminote12pro5g} width="75%" height="75%" />
            </div>
            <Typography gutterBottom variant="h5" component="div">
                Redmi Note 12 Pro 5G
            </Typography>
            <div className="detail">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>หน้าจอหลัก</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            OLED ขนาด 6.67 นิ้ว ความละเอียด (1080 x 2400)
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>ชิปเซ็ต</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Dimensity 1080
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>RAM</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            8GB
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>ROM</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            256GB
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>แบตเตอรี่</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            5000mAh
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>กล้องหลัง</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            กล้องหลัก 50MP (f/1.9)
                        </Typography>
                        <Typography>
                            กล้อง Ultra Wide 8MP (f/2.2)
                        </Typography>
                        <Typography>
                            กล้อง Macro 2MP (f/2.4)
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>กล้องหน้า</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            ความละเอียด 16MP f(/2.5)
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Refresh rate</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            120Hz
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>ระบบปฏิบัติการ</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Android 12 ครอบทับด้วย MIUI 14
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="contentunderimg">
                <RadioGroupRating />
                <FormPropsTextFields />
            </div>
            <button><Link to='/checkout'>Add to Cart</Link></button>
        </>
    )
}

export default Aboutredminote12pro5g