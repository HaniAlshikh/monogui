import {Box} from "@mui/material";
import {useState} from "react";
import Header from "../../components/global/Header.jsx";
import AuditLogByDateRange from "./AuditLogByDateRange.jsx";
import AuditLogByUser from "./AuditLogByUser.jsx";

const auditLogOptions = {}

const auditLogUseCases = {
    "Audit": {
        description: "Get audit log within the specified data-range",
        component: AuditLogByDateRange,
    },
    "User": {
        description: "Get audit log about a user",
        component: AuditLogByUser,
    },
}

const now = new Date();
auditLogOptions.minTime = new Date(now.getFullYear(), now.getMonth(), 1)
auditLogOptions.maxTime = new Date(now.getFullYear(), now.getMonth() + 1, 0)

const AuditLog = () => {
    const [{useCase, subtitle}, setUseCase] = useState({
        useCase: "Audit",
        subtitle: auditLogUseCases.Audit.description
    });

    return <Box m={3}>
        <Header suffix="Log" subtitle={subtitle}
                options={Object.keys(auditLogUseCases)}
                currentValue={useCase}
                handleChange={e => {
                    setUseCase({
                        useCase: e.target.value,
                        subtitle: auditLogUseCases[e.target.value].description
                    })
                }}/>
        {/*TODO auditLogUseCases[useCase].component(auditLogOptions)*/}
        {useCase === "Audit" && <AuditLogByDateRange {...auditLogOptions}/>}
        {useCase === "User" && <AuditLogByUser {...auditLogOptions}/>}
    </Box>
}

export default AuditLog;