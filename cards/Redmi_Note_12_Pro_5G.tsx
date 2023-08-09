import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import redminote12pro5g from "../assets/images/redminote12pro5g.jpg"
import { Link } from 'react-router-dom';

export default function Redmi_Note_12_Pro_5G() {
    return (
        <Card sx={{ minWidth: 500 }}>
            <CardMedia
                sx={{ height: 360 }}
                image={redminote12pro5g}
                title="Redmi Note 12 Pro 5G"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Redmi Note 12 Pro 5G
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Live vivid
                </Typography>
            </CardContent>
            <CardActions>
            <button><Link to='/aboutredminote12pro5g'>Learn More</Link></button>
            </CardActions>
        </Card>
    );
} 