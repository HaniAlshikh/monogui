import {Box} from "@mui/material";
import Header from "../../components/global/Header";
import {useContext, useEffect, useState} from "react";
import GetAuditLogUseCase from "../../usecases/audit/get_audit_log.js";
import AuditDatePicker from "../../components/audit/AuditDatePicker";
import AuthContext from "../auth/AuthContext.jsx";
import {DataGrid} from "@mui/x-data-grid";

const getAuditLogUseCase = new GetAuditLogUseCase()

const columns = [
    {field: "timestamp", headerName: "Timestamp", width: 190},
    {field: "issuer", headerName: "Issuer", width: 200},
    {field: "issuerId", headerName: "issuerId", width: 200}, // width: "max-content"},
    {field: "eventType", headerName: "eventType", width: 150},
    {field: "details", headerName: "details", flex: 1},
];

const Audit = () => {
    const ctx = useContext(AuthContext)
    const now = new Date();
    const [from, setFrom] = useState(new Date(now.getFullYear(), now.getMonth(), 1));
    const [to, setTo] = useState(new Date(now.getFullYear(), now.getMonth() + 1, 0));
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    getAuditLogUseCase.auditLogOptions.minTime = from
    getAuditLogUseCase.auditLogOptions.maxTime = to

    useEffect(() => {
        return () => updateTable(ctx, setData, setIsLoading)
    }, [ctx, from, to])

    return <Box m={3}>
        <Header title="Audit log" subtitle="Get audit log within the specified data-range"/>
        <AuditDatePicker
            from={from}
            onChangeFrom={(newFrom) => {
                setFrom(newFrom)
                updateTable(ctx, setData, setIsLoading)
            }}
            to={to}
            onChangeTo={(newTo) => {
                setTo(newFrom)
                updateTable(ctx, setData, setIsLoading)
            }}
        />
        <Box mt={4} height="70vh">
            <DataGrid loading={isLoading} autoPageSize getRowId={(row) => row.key} rows={data}
                      columns={columns}/>
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

export default Audit;