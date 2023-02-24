import {Box} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import GetAuditLogUseCase from "../../usecases/audit/get_audit_log.js";
import AuditDatePicker from "../../components/audit/AuditDatePicker";
import AuthContext from "../auth/AuthContext.jsx";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";

const getAuditLogUseCase = new GetAuditLogUseCase()

const columns = [
    {field: "timestamp", headerName: "Timestamp", width: 190},
    {field: "issuer", headerName: "Issuer", width: 200},
    {field: "issuerId", headerName: "issuerId", width: 200}, // width: "max-content"},
    {field: "eventType", headerName: "eventType", width: 150},
    {field: "details", headerName: "details", flex: 1},
];

const AuditLogByDateRange = (auditLogOptions) => {
    const ctx = useContext(AuthContext)
    const [from, setFrom] = useState(auditLogOptions.minTime);
    const [to, setTo] = useState(auditLogOptions.maxTime);

    getAuditLogUseCase.auditLogOptions.minTime = from
    getAuditLogUseCase.auditLogOptions.maxTime = to

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        return () => updateTable(ctx, setData, setIsLoading)
    }, [ctx, from, to])

    return <Box>
        <AuditDatePicker
            from={from}
            onChangeFrom={setFrom}
            to={to}
            onChangeTo={setTo}
        />
        <Box mt={4} height="70vh">
            <DataGrid loading={isLoading} autoPageSize getRowId={(row) => row.key} rows={data}
                      columns={columns} components={{Toolbar: GridToolbar}}/>
        </Box>
    </Box>
}

const updateTable = (ctx, setData, setIsLoading) => {
    setIsLoading(true)
    getAuditLogUseCase.run(ctx).then(d => {
        console.log(d)
        setData(d)
        setIsLoading(false)
    })
}

export default AuditLogByDateRange;