import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import huaweip60prowhite from "../assets/images/huaweip60prowhite.jpg"
import { Link } from 'react-router-dom';

export default function HUAWEI_P60_Pro() {
    return (
        <Card sx={{ minWidth: 500 }}>
            <CardMedia
                sx={{ height: 360 }}
                image={huaweip60prowhite}
                title="HUAWEI P60 Pro"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    HUAWEI P60 Pro
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Ultra Lighting XMAGE Camera
                </Typography>
            </CardContent>
            <CardActions>
            <button><Link to='/abouthuaweip60pro'>Learn More</Link></button>
            </CardActions>
        </Card>
    );
}