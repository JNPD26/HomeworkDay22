import ResponsiveAppBar from "../components/ResponsiveAppBar"
import oppofindn2flip from "../assets/images/oppofindn2flip.jpg"
import RadioGroupRating from "../components/Rating"
import FormPropsTextFields from "../components/Textfield"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

const Aboutoppofindn2flip = () => {
    return (
        <>
            <div className="navbar">
                <ResponsiveAppBar />
            </div>
            <div className="contentimg">
                <img src={oppofindn2flip} width="55%" height="55%" />
            </div>
            <Typography gutterBottom variant="h5" component="div">
                OPPO Find N2 Flip
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
                            AMOLED ขนาด 6.8 นิ้ว ความละเอียด FHD+ (2520 x 1080 พิกเซล)
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
                            Dimensity 9000+ Octa-core 3.2GHz (4nm)
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
                            4300mAh
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
                            กล้องหลัก 50MP (f/1.8)
                        </Typography>
                        <Typography>
                            กล้อง Ultra Wide 8MP (f/2.2)
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
                            32MP (f/2.4)
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
                            หน้าจอนอก 60Hz, หน้าจอหลัก 120Hz
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
                            Android 13 (ColorOS 13)
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

export default Aboutoppofindn2flip