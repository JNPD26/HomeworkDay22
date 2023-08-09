import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import galaxyzflip4 from "../assets/images/galaxyzflip4.jpg"
import { Link } from 'react-router-dom';

export default function SAMSUNG_Galaxy_Z_Flip4() {
    return (
        <Card sx={{ minWidth: 500 }}>
            <CardMedia
                sx={{ height: 360 }}
                image={galaxyzflip4}
                title="SAMSUNG Galaxy Z Flip4"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    SAMSUNG Galaxy Z Flip4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Flex is greater than Flat
                </Typography>
            </CardContent>
            <CardActions>
            <button><Link to='/aboutsamsunggalaxyzflip4'>Learn More</Link></button>
            </CardActions>
        </Card>
    );
} 