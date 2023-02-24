import {Box} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../auth/AuthContext.jsx";
import TextField from "@mui/material/TextField";
import GetAuditLogUsersOverviewUseCase from "../../usecases/audit/get_audit_log_users_overview.js";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DataGrid} from "@mui/x-data-grid";
import {DateTimePicker} from "@mui/x-date-pickers";

const useCase = new GetAuditLogUsersOverviewUseCase()

const columns = [
    {field: "name", headerName: "Name", width: 190},
    {field: "email", headerName: "Email", width: 200},
    {field: "roles", headerName: "Roles", width: 200}, // width: "max-content"},
    {field: "tenants", headerName: "Tenants", width: 150},
    {field: "clusters", headerName: "Clusters", width: 150},
    {field: "details", headerName: "details", flex: 1},
];

const AuditLogUsersOverview = (auditLogOptions) => {
    const ctx = useContext(AuthContext)
    const [timestamp, setTimestamp] = useState(auditLogOptions.timestamp);

    useCase.auditLogOptions.timestamp = timestamp

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        return () => updateTable(ctx, setData, setIsLoading)
    }, [ctx, timestamp])

    return <Box>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                // inputFormat="yyyy-MM-dd"
                label="timestamp"
                value={timestamp}
                onChange={setTimestamp}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        <Box mt={4} height="70vh">
            <DataGrid loading={isLoading} autoPageSize getRowId={(row) => row.key} rows={data}
                      columns={columns}/>
        </Box>
    </Box>
}

const updateTable = (ctx, setData, setIsLoading) => {
    setIsLoading(true)
    useCase.run(ctx).then(d => {
        console.log(d)
        setData(d)
        setIsLoading(false)
    })
}

export default AuditLogUsersOverview;