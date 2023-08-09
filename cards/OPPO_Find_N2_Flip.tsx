import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import oppofindn2flip from "../assets/images/oppofindn2flip.jpg"
import { Link } from 'react-router-dom';

export default function OPPO_Find_N2_Flip() {
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardMedia
        sx={{ height: 360 }}
        image={oppofindn2flip}
        title="OPPO Find N2 Flip"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          OPPO Find N2 Flip
        </Typography>
        <Typography variant="body2" color="text.secondary">
          New Generation Flexion Hinge
        </Typography>
      </CardContent>
      <CardActions>
        <button><Link to='/aboutoppofindn2flip'>Learn More</Link></button>
      </CardActions>
    </Card>
  );
}