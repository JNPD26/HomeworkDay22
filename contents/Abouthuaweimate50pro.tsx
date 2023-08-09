import ResponsiveAppBar from "../components/ResponsiveAppBar"
import huaweimate50pro from "../assets/images/huaweimate50pro.webp"
import RadioGroupRating from "../components/Rating"
import FormPropsTextFields from "../components/Textfield"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

const Abouthuaweimate50pro = () => {
    return (
        <>
            <div className="navbar">
                <ResponsiveAppBar />
            </div>
            <div className="contentimg">
                <img src={huaweimate50pro} width="50%" height="50%" />
            </div>
            <Typography gutterBottom variant="h5" component="div">
                HUAWEI Mate 50 Pro
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
                            OLED ขนาด 6.74 นิ้ว ความละเอียด (1212 x 2616)
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
                            Snapdragon 8+ 4G Gen 1
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
                            256GB/512GB
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
                            4700mAh
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
                            กล้องหลัก 50MP (f/1.8-f/4.0)
                        </Typography>
                        <Typography>
                            กล้อง Ultra Wide 13MP (f/2.2)
                        </Typography>
                        <Typography>
                            กล้อง Periscope 64MP (f/3.5)
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
                            กล้อง Ultra-wide ความละเอียด 13MP f(/2.4)
                        </Typography>
                        <Typography>
                            กล้องตรวจจับความลึก 3 มิติ
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
                            HarmonyOS 3.0
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

export default Abouthuaweimate50pro