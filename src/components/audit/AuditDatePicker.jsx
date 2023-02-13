import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {DatePicker} from "@mui/x-date-pickers";

export default function AuditDatePicker(props) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box display="flex">
                <Box mr={4}>
                    <DatePicker
                        inputFormat="yyyy-MM-dd"
                        label="from"
                        value={props.from}
                        onChange={props.onChangeFrom}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>

                <Box>
                    <DatePicker
                        inputFormat="yyyy-MM-dd"
                        label="to"
                        value={props.to}
                        onChange={props.onChangeTo}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
            </Box>
        </LocalizationProvider>
    );
}