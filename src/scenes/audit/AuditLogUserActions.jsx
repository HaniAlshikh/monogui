import {Box} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import AuditDatePicker from "../../components/audit/AuditDatePicker";
import AuthContext from "../auth/AuthContext.jsx";
import {DataGrid} from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import GetAuditLogUserActionsUseCase from "../../usecases/audit/get_audit_log_user_actions.js";

const getAuditLogUserActionsUseCase = new GetAuditLogUserActionsUseCase()

const columns = [
    {field: "timestamp", headerName: "Timestamp", width: 190},
    {field: "issuer", headerName: "Issuer", width: 200},
    {field: "issuerId", headerName: "issuerId", width: 200}, // width: "max-content"},
    {field: "eventType", headerName: "eventType", width: 150},
    {field: "details", headerName: "details", flex: 1},
];

const AuditLogUserActions = (auditLogOptions) => {
    const ctx = useContext(AuthContext)
    const [from, setFrom] = useState(auditLogOptions.minTime);
    const [to, setTo] = useState(auditLogOptions.maxTime);
    const [email, setEmail] = useState();

    getAuditLogUserActionsUseCase.auditLogOptions.minTime = from
    getAuditLogUserActionsUseCase.auditLogOptions.maxTime = to
    getAuditLogUserActionsUseCase.auditLogOptions.email = email

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        return () => updateTable(ctx, setData, setIsLoading)
    }, [ctx, from, to, email])

    return <Box>
        <Box display={"flex"}>
            <AuditDatePicker
                from={from}
                onChangeFrom={setFrom}
                to={to}
                onChangeTo={setTo}
            />
            <TextField sx={{ml: 4}} label="email" variant="outlined"
                       onChange={e => setEmail(e.target.value)}
            />
        </Box>

        <Box mt={4} height="70vh">
            <DataGrid loading={isLoading} autoPageSize getRowId={(row) => row.key} rows={data}
                      columns={columns}/>
        </Box>
    </Box>
}

const updateTable = (ctx, setData, setIsLoading) => {
    setIsLoading(true)
    const email = getAuditLogUserActionsUseCase.auditLogOptions.email
    if (!email || !email.includes("@")) {
        return setIsLoading(false)
    }
    getAuditLogUserActionsUseCase.run(ctx).then(d => {
        console.log(d)
        setData(d)
        setIsLoading(false)
    })
}

export default AuditLogUserActions;