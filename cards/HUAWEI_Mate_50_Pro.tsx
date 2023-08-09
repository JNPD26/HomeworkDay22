import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import huaweimate50pro from "../assets/images/huaweimate50pro.webp"
import { Link } from 'react-router-dom';

export default function HUAWEI_Mate_50_Pro() {
    return (
        <Card sx={{ minWidth: 500 }}>
            <CardMedia
                sx={{ height: 360 }}
                image={huaweimate50pro}
                title="HUAWEI Mate 50 Pro"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    HUAWEI Mate 50 Pro
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Ultra Aperture XMAGE Camera
                </Typography>
            </CardContent>
            <CardActions>
            <button><Link to='/abouthuaweimate50pro'>Learn More</Link></button>
            </CardActions>
        </Card>
    );
}