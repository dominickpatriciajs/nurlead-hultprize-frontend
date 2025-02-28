
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CardModel1 = () =>{
    

    return(

        <Card sx={{ maxWidth: 300, borderRadius:'5%'}}>
      <CardHeader/>
      <CardMedia
        component="img"
        height="194"
        image="/nurlead-hultprize-frontend/image.jpg"
        alt="Nurlead Image"
      />

        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Estrategias de contenido Marketing digital</Typography>
          <Typography sx={{ marginBottom: 2 }}>Un curso de Carles Marsal</Typography>
          <Typography sx={{ marginBottom: 2 }}>Descubre los secretos de fotografía y vídeo para triunfar en Instagram</Typography>
          
        </CardContent>

        <CardContent>
            <Box sx={{display:'flex', justifyContent: 'center',}}>
                    <Button variant="contained" sx={{backgroundColor:'#CD6AE7', borderRadius:'0.5rem', fontSize:'0.6rem', width:'90%'}}>Comprar   S/ 4.99</Button>        
                </Box>
        </CardContent>

        <CardActions disableSpacing>
        
        </CardActions>
      </Card>
    )
}

export default CardModel1;