import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function CardComplex() {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className='mt-5 mb-3 mx-auto'>
      <Grid xs={4}>
        <Link href='/noticias/5e71218f8b602b2d607cf06c'>
          <Card className={classes.root}>
            <CardHeader
              title="DELIRIOS SOBRE LA BELLEZA"
              subheader="Autor: Aglaia Berlutti"
              className='text-center'
            />
            <CardMedia
              className={classes.media}
              image={require('../../assets/img/card-complex-1.jpg')}
              title="Noticia 1"
            />
            <CardContent className='text-center'>
              <Typography variant="body2" color="textSecondary" component="p">
              Del arte y su lenguaje misterioso
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid xs={4}>
        <Link href='/noticias/5e703e7f994a6b3e0c144ca2'>
          <Card className={classes.root}>
            <CardHeader
              title="ALTERNATIVAS DE CARA AL FUTURO"
              subheader="Autor: Alejandro Arturo Martínez"
              className='text-center'
            />
            <CardMedia
              className={classes.media}
              image={require('../../assets/img/card-complex-2.jpg')}
              title="Noticia 1"
            />
            <CardContent className='text-center'>
              <Typography variant="body2" color="textSecondary" component="p">
              Cómo la globalización acorta las distancias
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid xs={4}>
        <Link href='/noticias/5e72f37faa608a0017b0cbf9'>
          <Card className={classes.root}>
            <CardHeader
              title="COVID-19: UN RESPIRO PARA EL PLANETA"
              subheader="Autor: Pijamasurf"
              className='text-center'
            />
            <CardMedia
              className={classes.media}
              image={require('../../assets/img/card-complex-3.jpg')}
              title="Noticia 1"
            />
            <CardContent className='text-center'>
              <Typography variant="body2" color="textSecondary" component="p">
              Una de las consecuencias de la pandemia 
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}
