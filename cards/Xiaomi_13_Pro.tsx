import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import xiaomi13pro from "../assets/images/xiaomi13pro.jpg"
import { Link } from 'react-router-dom';

export default function Xiaomi_13_Pro() {
    return (
        <Card sx={{ minWidth: 500 }}>
            <CardMedia
                sx={{ height: 360 }}
                image={xiaomi13pro}
                title="Xiaomi 13 Pro"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Xiaomi 13 Pro
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Behind the masterpiece
                </Typography>
            </CardContent>
            <CardActions>
            <button><Link to='/aboutxiaomi13pro'>Learn More</Link></button>
            </CardActions>
        </Card>
    );
}