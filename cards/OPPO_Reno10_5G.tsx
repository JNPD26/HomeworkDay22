import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import opporeno105g from "../assets/images/opporeno105g.jpg"
import { Link } from 'react-router-dom';

export default function OPPO_Reno10_5G() {
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardMedia
        sx={{ height: 360 }}
        image={opporeno105g}
        title="OPPO Reno10 5G"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          OPPO Reno10 5G
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The Portrait Expert
        </Typography>
      </CardContent>
      <CardActions>
      <button><Link to='/aboutopporeno105g'>Learn More</Link></button>
      </CardActions>
    </Card>
  );
} 