import React, {useState, useEffect} from 'react'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function PopUp({open, setOpen, addExpences}) {

  const [cost, setCost] = useState('')
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState('');

    useEffect(() => {
      if(cost !== null && quantity !== null){
        setTotal(cost * quantity)
      }
    }, [cost, quantity])

    const submitModal = (e) => {
      e.preventDefault()
      if(description === '' && !total){
        return
      };
      addExpences(total, description);
      setOpen(false)
    }
    const onClose = () => {
      setOpen(false)
    }

  return (
    <div>
         <Modal
                open={open}
                onSubmit={submitModal}
                required
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style} >
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Please type required information
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                  </Box>
                    <Box sx={{ mt: 3 }}>
                    <form>
          <FormControl  fullWidth sx={{ mb: 1 }} required>
          <InputLabel htmlFor="outlined-adornment-cost">Cost</InputLabel>
          <OutlinedInput
            id="outlined-adornment-cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Cost"
            type="number"
          />
        </FormControl>
        <FormControl  fullWidth sx={{ mb: 1 }} required>
          <InputLabel htmlFor="outlined-adornment-amount">Quantity</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            label="Quantity"
            type="number"
          />
        </FormControl>
            <TextField 
            required
              id="outlined-multiline-static"
              label="Description"
              fullWidth
              multiline
              rows={4}
              autoFocus
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            />
           <Typography id="total" variant="h6" component="h2" sx={{my: 1}}>
                Your Total is ${total}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ my: 2 }}
              color="secondary"
            >
              Submit
            </Button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default PopUp

