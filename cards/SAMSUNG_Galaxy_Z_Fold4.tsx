import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import galaxyzfold4 from "../assets/images/galaxyzfold4.jpg"
import { Link } from 'react-router-dom';

export default function SAMSUNG_Galaxy_Z_Fold4() {
    return (
        <Card sx={{ minWidth: 500 }}>
            <CardMedia
                sx={{ height: 360 }}
                image={galaxyzfold4}
                title="SAMSUNG Galaxy Z Fold4"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    SAMSUNG Galaxy Z Fold4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Join the flip side
                </Typography>
            </CardContent>
            <CardActions>
            <button><Link to='/aboutsamsunggalaxyzfold4'>Learn More</Link></button>
            </CardActions>
        </Card>
    );
} 