import Topbar from "../../components/global/Topbar";
import Sidebar from "../../components/global/Sidebar";
import {Box} from "@mui/material";
import {ProSidebarProvider} from "react-pro-sidebar";

const Content = ({children, ..._}) => {
    return <ProSidebarProvider>
        <Box display={"flex"} height={"100%"} width={"100%"}>
            <Sidebar/>
            <main className="content">
                <Topbar/>
                {children}
            </main>
        </Box>
    </ProSidebarProvider>
}

export default Content