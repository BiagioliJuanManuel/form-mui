import {
  Box,
  TextField,
  Container,
  Card,
  CardContent,
  CardHeader,
  Button
} from '@mui/material';
import './App.css';

function App() {
  return (
    <Container className='container' >
      <Card className='card' >
        <CardHeader title="Formulario MUI" subheader="Por favor complete el formulario" />
        <CardContent>
          <Box component="form" noValidate className='form'>
            <TextField id="name" label="Nombre" autoComplete="given-name" required variant="outlined" fullWidth />
            <TextField id="name" label="Apellido" autoComplete="family-name" required variant="outlined" fullWidth />
            <TextField id="email" label="Email" type="email" autoComplete="email" required variant="outlined" fullWidth />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Enviar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
