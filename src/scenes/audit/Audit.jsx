import {Box} from "@mui/material";
import Header from "../../components/global/Header";
import {useContext, useEffect, useState} from "react";
import GetByDateRange from "../../usecases/audit/GetByDateRange";
import {DataGrid} from "@mui/x-data-grid";
import AuditDatePicker from "../../components/audit/AuditDatePicker";
import AuthContext from "../auth/AuthContext";

const Audit = () => {
    const authCtx = useContext(AuthContext)
    const now = new Date();
    const [from, setFrom] = useState(new Date(now.getFullYear(), now.getMonth(), 1));
    const [to, setTo] = useState(new Date(now.getFullYear(), now.getMonth() + 1, 0));
    const [data, setData] = useState([])

    useEffect(() => updateTable(authCtx, from, to, setData), [from, to])

    const columns = [
        {field: "timestamp", headerName: "Timestamp"},
        {field: "issuer", headerName: "Issuer"},
        {field: "issuerId", headerName: "issuerId"}, // width: "max-content"},
        {field: "eventType", headerName: "eventType"},
        {field: "details", headerName: "details", flex: 1},
    ];

    return <Box m={3}>
        <Header title="Audit log" subtitle="Get audit log within the specified data-range"/>
        <AuditDatePicker
            from={from}
            onChangeFrom={(newFrom) => {
                let nf = newFrom.$d
                setFrom(nf)
                updateTable(authCtx, nf, to, setData)
            }}
            to={to}
            onChangeTo={(newTo) => {
                let nt = newTo.$d
                setTo(nt)
                updateTable(authCtx, from, nt, setData)
            }}
        />
        <Box mt={4} height="65vh">
            <DataGrid getRowId={(row) => row.key} checkboxSelection rows={data} columns={columns}/>
        </Box>
    </Box>
}

const updateTable = (ctx, from, to, setData) => {
    const dataStream = GetByDateRange(ctx, from, to)
    const d = []
    setData([...d])
    dataStream.on('data', function (response) {
        if (response === "EOF") {
            dataStream.cancel()
            return
        }
        const e = {
            key: response.getTimestamp().getSeconds() + response.getTimestamp().getNanos(),
            timestamp: response.getTimestamp().toDate(),
            issuer: response.getIssuer(),
            issuerId: response.getIssuerId(),
            eventType: response.getEventType(),
            details: response.getDetails(),
        }
        d.push(e)
        setData([...d])
        // setData(old => [e, ...old])
    });
    dataStream.on('status', function (status) {
        console.log(status.code);
        console.log(status.details);
        console.log(status.metadata);
        status.code === 0 && dataStream.cancel()
    });
    dataStream.on('end', function (end) {
        // stream end signal
        dataStream.cancel()
    });
}

export default Audit;