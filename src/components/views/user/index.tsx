import { Button, Checkbox } from '@mui/material'
import { CheckCircle, RadioButtonUncheckedOutlined } from '@mui/icons-material'
import { StyledInput } from 'components/common/StyledInput'

const Main = () => {
  return (
    <div className="flex m-auto flex-col w-64 items-center">
      <h1 className="text-center mt-5 text-2xl">Welcome Back!</h1>
      <StyledInput label="Email" className="my-3 rounded w-full" />
      <StyledInput label="Password" className="rounded w-full" />
      <Checkbox
        checked={true}
        icon={<RadioButtonUncheckedOutlined className="text-primary" />}
        checkedIcon={<CheckCircle />}
        tabIndex={-1}
      />
      <Button variant="contained" className="mt-5 w-32" disabled>
        Login
      </Button>
      <Button variant="contained" className="mt-5 w-full">
        Another Button
      </Button>
      <Button variant="outlined" className="mt-5">
        Outlined
      </Button>
    </div>
  )
}

export default Main
