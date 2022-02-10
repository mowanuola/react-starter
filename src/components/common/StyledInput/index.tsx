import { styled } from 'twin.macro'
import { InputBase, FormControl, InputLabel } from '@mui/material'

const Input = styled(InputBase)(({ theme }: any) => ({
  transform: 'none',
  'label + &': {
    marginTop: theme.spacing(3),
  },
}))
export const StyledInput = ({ label, className: classes }: any) => {
  return (
    <FormControl className={classes}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Input className="rounded p-2" name={label} />
    </FormControl>
  )
}
