import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {DatePicker} from '@mui/x-date-pickers-pro';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

export default function AuditDatePicker(props) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box display="flex">
                <Box mr={4}>
                    <DatePicker
                        label="from"
                        value={props.from}
                        onChange={(newValue) => {
                            console.log(newValue.$d)
                            props.onChangeFrom(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>

                <Box>
                    <DatePicker
                        label="to"
                        value={props.to}
                        onChange={(newValue) => {
                            console.log(newValue.$d)
                            props.onChangeTo(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
            </Box>
        </LocalizationProvider>
    );
}