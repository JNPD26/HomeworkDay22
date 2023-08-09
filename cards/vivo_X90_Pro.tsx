import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import vivox90pro from "../assets/images/vivox90pro.jpg"
import { Link } from 'react-router-dom';

export default function Vivo_X90_Pro() {
    return (
        <Card sx={{ minWidth: 500 }}>
            <CardMedia
                sx={{ height: 360 }}
                image={vivox90pro}
                title="vivo X90 Pro"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    vivo X90 Pro
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Pro Photography in Pocket
                </Typography>
            </CardContent>
            <CardActions>
            <button><Link to='/aboutvivox90pro'>Learn More</Link></button>
            </CardActions>
        </Card>
    );
}