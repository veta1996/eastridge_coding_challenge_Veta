import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PopUp from './PopUp';
import ExpenceItem from './ExpenceItem';


const theme = createTheme();

function MainPage() {

  const [open, setOpen] = useState(false)
  const [expences, setExpences] = useState([])
      
  const openModal = () => {
    setOpen(true)
  }
  const addExpences = (total, description) => {
    const newExpences = [...expences, {total, description}]
    setExpences(newExpences)
  }
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
                <Typography component="h1" variant="h5">
                  Click button to submit your expense
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={openModal}
                >
                  Submit Expense
                </Button>
            </Box>
           {open && <PopUp open={open} setOpen={setOpen} addExpences={addExpences}/>}
           <>
          {expences.map((item, index) => (
            <ExpenceItem item={item} key={index} />
          ))}
        </>
          </Container>
        </ThemeProvider>
      );
}

export default MainPage