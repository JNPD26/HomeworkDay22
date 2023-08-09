import ResponsiveAppBar from "../components/ResponsiveAppBar"
import galaxyzflip4 from "../assets/images/galaxyzflip4.jpg"
import RadioGroupRating from "../components/Rating"
import FormPropsTextFields from "../components/Textfield"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

const Aboutsamsunggalaxyzflip4 = () => {
    return (
        <>
            <div className="navbar">
                <ResponsiveAppBar />
            </div>
            <div className="contentimg">
                <img src={galaxyzflip4} width="80%" height="80%" />
            </div>
            <Typography gutterBottom variant="h5" component="div">
                SAMSUNG Galaxy Z Flip4
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
                            Foldable Dynamic AMOLED 2X ขนาด 6.7 นิ้ว ความละเอียด FHD+ (1080 x 2640)
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
                            Snapdragon 8+ Gen 1
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
                            128GB/256GB/512GB
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
                            3700mAh
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
                            กล้องหลัก 12MP (f/1.8)
                        </Typography>
                        <Typography>
                            กล้อง Ultra Wide 12MP (f/2.2)
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
                            10MP (f/2.4)
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
                            Android 12 ครอบทับด้วย One UI 4.1
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

export default Aboutsamsunggalaxyzflip4