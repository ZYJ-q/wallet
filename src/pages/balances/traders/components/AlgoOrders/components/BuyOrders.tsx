import { Grid, InputAdornment, Stack, ToggleButton, ToggleButtonGroup, Typography, } from "@mui/material"
import React, { useEffect } from "react";
import '../../../index.css'
import { AiFillInfoCircle } from 'react-icons/ai'
import { Box } from "@mui/system";
import { styled, } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { FormattedMessage } from "react-intl";

type Props = {
  value: string
}

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: '#000',
  boxShadow: 'none',
  textTransform: 'none',
  backgroundColor: '#60d937',
  fontSize: 16,
  padding: '6px 12px',
  border: '0px ',
  lineHeight: 1.5,
  '&:hover': {
    backgroundColor: '#00ff00',
    opacity: 1,
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: 'none',
  },
  '&:after': {
    boxShadow: '0 0 5px 5px rgba(96, 217, 55, 0.9)'
  }
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: '#fff',
  '& .MuiToggleButton-root': {
    padding: '2px 10px',
    fontSize: '0.800rem',

    '&.Mui-selected': {
      backgroundColor: '#60d937',
      color: '#000',
      '&:hover': {
        backgroundColor: '#60d937',
      }
    },
    '&:hover': {
      backgroundColor: '#60d937',

    },


  },
  '& .MuiToggleButtonGroup-grouped': {
    // margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    borderWidth: '0px',
    padding: '15px 12px 15px ',
    fontSize: '0.800rem',
    // transition: theme.transitions.create([
    //   'border-color',
    //   'background-color',
    //   'box-shadow',
    // ]),
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      // borderColor: theme.palette.primary.main,
      borderWidth: '0px'
    },
    '&:before': {
      borderWidth: '0px'
    },
    '&:after': {
      borderWidth: '0px'
    },
    '&:hover:not(.Mui-disabled):before': {
      borderWidth: '0px'

    },
    // '& input:valid + fieldset': {
    //   borderColor: '#E0E3E7',
    //   borderWidth: 1,
    // },
    // '& input:invalid + fieldset': {
    //   borderColor: 'red',
    //   borderWidth: 1,
    // },
    // '& input:valid:focus + fieldset': {
    //   borderLeftWidth: 4,
    //   padding: '4px !important', // override inline-style
    // },
  },
}));

const TwapTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    borderWidth: '0px',
    padding: '15px 12px 15px ',
    fontSize: '0.800rem',
    '&.Mui-disabled': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    // transition: theme.transitions.create([
    //   'border-color',
    //   'background-color',
    //   'box-shadow',
    // ]),
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      // borderColor: theme.palette.primary.main,
      borderWidth: '0px'
    },
    '&:before': {
      borderWidth: '0px'
    },
    '&:after': {
      borderWidth: '0px'
    },
    '&:hover:not(.Mui-disabled):before': {
      borderWidth: '0px'

    },
    // '& input:valid + fieldset': {
    //   borderColor: '#E0E3E7',
    //   borderWidth: 1,
    // },
    // '& input:invalid + fieldset': {
    //   borderColor: 'red',
    //   borderWidth: 1,
    // },
    // '& input:valid:focus + fieldset': {
    //   borderLeftWidth: 4,
    //   padding: '4px !important', // override inline-style
    // },
  },
}));

const PriceTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    borderWidth: '0px',
    padding: '10px 12px 10px ',
    fontSize: '0.800rem',
    '&.Mui-disabled': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',

    },
    // transition: theme.transitions.create([
    //   'border-color',
    //   'background-color',
    //   'box-shadow',
    // ]),
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      // borderColor: theme.palette.primary.main,
      borderWidth: '0px'
    },
    '&:before': {
      borderWidth: '0px'
    },
    '&:after': {
      borderWidth: '0px'
    },
    '&:hover:not(.Mui-disabled):before': {
      borderWidth: '0px'
    },
    // '& input:valid + fieldset': {
    //   borderColor: '#E0E3E7',
    //   borderWidth: 1,
    // },
    // '& input:invalid + fieldset': {
    //   borderColor: 'red',
    //   borderWidth: 1,
    // },
    // '& input:valid:focus + fieldset': {
    //   borderLeftWidth: 4,
    //   padding: '4px !important', // override inline-style
    // },
  },
}));

const TimeTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: false } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    borderWidth: '0px',
    padding: '0px ',
    fontSize: '0.800rem',
    '& .Mui-disabled': {
      // backgroundColor: 'rgba(0, 0, 0, 0.08)',

    },
    // transition: theme.transitions.create([
    //   'border-color',
    //   'background-color',
    //   'box-shadow',
    // ]),
    '&:hover': {
      // backgroundColor: 'rgba(0, 0, 0, 0.06)',
      borderWidth: '0px'
    },
    '&.Mui-focused': {
      // backgroundColor: 'rgba(0, 0, 0, 0.06)',
      boxShadow: 'none',
      // borderColor: theme.palette.primary.main,
      borderWidth: '0px'
    },
    '&:before': {
      borderWidth: '0px'
    },
    '&:after': {
      borderWidth: '0px'
    },
    '&:hover:not(.Mui-disabled):before': {
      borderWidth: '0px'
    },
    // '& input:valid + fieldset': {
    //   borderColor: '#E0E3E7',
    //   borderWidth: 1,
    // },
    // '& input:invalid + fieldset': {
    //   borderColor: 'red',
    //   borderWidth: 1,
    // },
    // '& input:valid:focus + fieldset': {
    //   borderLeftWidth: 4,
    //   padding: '4px !important', // override inline-style
    // },
  },
}));



const BuyOrders = (props: Props) => {

  const [alignment, setAlignment] = React.useState('BTC');

  const [alignmentEx, setAlignmentEx] = React.useState('TWAP');


  useEffect(() => {
    setAlignment(props.value)

  }, [props])

  useEffect(() => {

  }, [alignment])


  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const handleChangeEx = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignmentEx(newAlignment);
  };

  return (
    <>
      <Grid sx={{ width: '100%' }}>

        <Stack spacing={2} sx={{ width: '100%' }}>


          {/* <Box sx={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.06)' }}>
            <Stack spacing={2} sx={{ width: '100%', alignItems: 'center', justifyContent: "start" }}>
              <RedditTextField
                fullWidth
                label={`Amount(${alignment})`}
                defaultValue="0.00"
                size="small"
                // placeholder="0.00"
                id="filled-multiline-static"
                variant="filled"
                style={{ marginTop: 11 }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <StyledToggleButtonGroup
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      aria-label="Platform"
                      size="small"
                    >
                      <ToggleButton value={props.value}>{props.value}</ToggleButton>
                      <ToggleButton value="USDT">USDT</ToggleButton>
                    </StyledToggleButtonGroup>
                  </InputAdornment>,


                  // startAdornment: <InputAdornment position="start">
                  //   ≈0.00 USDT &nbsp;&nbsp; <AiFillInfoCircle />
                  // </InputAdornment>
                }}
              />
              <Stack sx={{ width: '100%', alignItems: 'start' }}>
                <Typography variant="body2" sx={{ color: '#64605f', fontSize: 14 }}>≈0.00 USDT &nbsp;&nbsp; <AiFillInfoCircle /></Typography>
              </Stack> */}




          {/* <Stack direction="row" spacing={2} sx={{ width: '40%', alignItems: 'center' }}>
                <TextField
                  size="small"
                  id="filled-multiline"
                  multiline
                  variant="standard"
                  placeholder="1-72"
                  InputProps={{
                    endAdornment: <InputAdornment position="end" >
                      <Typography variant="body2" sx={{ color: '#64605f', fontSize: 14, fontWeight: 800 }}>Hours</Typography>

                    </InputAdornment>
                  }}
                />
                <TextField
                  size="small"
                  id="filled-multiline"
                  multiline
                  variant="standard"
                  placeholder="1-59"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <Typography variant="body2" sx={{ color: '#64605f', fontSize: 14, fontWeight: 800 }}>Mins</Typography>
                    </InputAdornment>
                  }}
                />

              </Stack>

              <Stack sx={{ flex: 1, alignItems: 'end' }}>
                <Typography variant="body2" sx={{ color: '#64605f' }}>Time Duration</Typography> */}
          {/* <TextField
                size="small"
                id="filled-multiline"
                multiline
                variant="standard"
                placeholder="1-72"
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    Hours

                  </InputAdornment>
                }}
              />
              <TextField
                size="small"
                id="filled-multiline"
                multiline
                variant="standard"
                placeholder="1-59"
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    Mins
                  </InputAdornment>
                }}
              /> */}

          {/* </Stack> */}

          {/* </Stack> */}
          {/* </Box> */}

          <RedditTextField
            fullWidth
            label={`Amount(${alignment})`}
            defaultValue="0.00"
            placeholder="0.00"
            id="filled-multiline-static"
            variant="filled"
            size="small"
            style={{ marginTop: 11 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <StyledToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                  size="small"
                >
                  <ToggleButton value={props.value}>{props.value}</ToggleButton>
                  <ToggleButton value="USDT">USDT</ToggleButton>
                </StyledToggleButtonGroup>
              </InputAdornment>,


              // startAdornment: <InputAdornment position="start">
              //   ≈0.00 USDT &nbsp;&nbsp; <AiFillInfoCircle />
              // </InputAdornment>
            }}
          >
            <Typography variant="body2" sx={{ color: '#64605f', fontSize: 14, position: "absolute" }}>≈0.00 USDT &nbsp;&nbsp; <AiFillInfoCircle /></Typography>
          </RedditTextField>



          <TwapTextField
            fullWidth
            id="filled-multiline-static"
            variant="filled"
            disabled
            size="small"
            InputProps={{
              startAdornment: <InputAdornment position="start">
                <StyledToggleButtonGroup
                  value={alignmentEx}
                  exclusive
                  onChange={handleChangeEx}
                  aria-label="Platform"
                  size="small"
                >
                  <ToggleButton value="TWAP">TWAP</ToggleButton>
                  <ToggleButton value="POV">POV</ToggleButton>
                </StyledToggleButtonGroup>
              </InputAdornment>,
              endAdornment: <InputAdornment position="end">
                <FormattedMessage id="execution-sra" /> &nbsp;&nbsp; <AiFillInfoCircle />
              </InputAdornment>
            }}
          />

          {/* <TextField
            sx={{ width: '100%' }}
            id="filled-multiline-static"
            multiline
            variant="standard"
            InputProps={{
              endAdornment: <InputAdornment position="end">
                Time Duration
              </InputAdornment>
            }}
          /> */}

          <Box sx={{ width: '100%', padding: 2, backgroundColor: 'rgba(0, 0, 0, 0.06)' }}>
            <Stack direction="row" sx={{ width: '100%', alignItems: 'center', justifyContent: "space-between" }}>
              <Stack direction="row" sx={{ width: '40%', alignItems: 'center', justifyContent: "space-evenly" }}>
                <Stack direction="row" sx={{ width: '50%', alignItems: 'center', justifyContent: "start" }}>
                  <TimeTextField
                    size="small"
                    id="filled-multiline"
                    multiline
                    sx={{ width: '40%' }}
                    variant="standard"
                    placeholder="1-72"
                  />
                  <Typography variant="body2" sx={{ color: '#64605f', fontSize: 13, fontWeight: 800 }}>Hours</Typography>
                  {/* <TimeTextField
                  size="small"
                  id="filled-multiline"
                  multiline
                  fullWidth
                  variant="outlined"
                  placeholder="1-59"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <Typography variant="body2" sx={{ color: '#64605f', fontSize: 14, fontWeight: 800 }}>Mins</Typography>
                    </InputAdornment>
                  }}
                /> */}

                </Stack>

                <Stack direction="row" sx={{ width: '50%', alignItems: 'center', justifyContent: "start" }}>
                  <TimeTextField
                    size="small"
                    id="filled-multiline"
                    multiline
                    sx={{ width: '40%' }}
                    variant="standard"
                    placeholder="1-59"
                  />
                  <Typography variant="body2" sx={{ color: '#64605f', fontSize: 13, fontWeight: 800 }}>Mins</Typography>
                  {/* <TimeTextField
                  size="small"
                  id="filled-multiline"
                  multiline
                  fullWidth
                  variant="outlined"
                  placeholder="1-59"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <Typography variant="body2" sx={{ color: '#64605f', fontSize: 14, fontWeight: 800 }}>Mins</Typography>
                    </InputAdornment>
                  }}
                /> */}

                </Stack>
              </Stack>

              <Stack sx={{ alignItems: 'end' }}>
                <Typography variant="body2" sx={{ color: '#64605f' }}><FormattedMessage id="time" /></Typography>
                {/* <TextField
                size="small"
                id="filled-multiline"
                multiline
                variant="standard"
                placeholder="1-72"
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    Hours

                  </InputAdornment>
                }}
              />
              <TextField
                size="small"
                id="filled-multiline"
                multiline
                variant="standard"
                placeholder="1-59"
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    Mins
                  </InputAdornment>
                }}
              /> */}

              </Stack>

            </Stack>
          </Box>

          <PriceTextField
            fullWidth
            id="filled-multiline"
            multiline
            variant="filled"
            placeholder="Optional"
            InputProps={{
              endAdornment: <InputAdornment position="end">
                Limit Price (USDT)

              </InputAdornment>
            }}
          />

          <ColorButton variant="contained" sx={{ width: '100%' }}><FormattedMessage id="place-order" /></ColorButton>

          {/* <Button variant="contained" sx={{ width: '100%' }}>Place Order</Button> */}


          {/* <Stack direction="row" spacing={2} sx={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Grid sx={{ width: '33.5%' }}>

              

            </Grid>
          </Stack> */}

        </Stack>




      </Grid>
    </>
  )
}

export default BuyOrders