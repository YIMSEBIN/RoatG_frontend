import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "@emotion/styled";

export default function Sidemenu({ children, ...rest }: { children?: React.ReactNode }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper {...rest}>
      <SideTaps orientation="vertical" value={value} onChange={handleChange}>
        <Tab label="App Info" {...a11yProps(0)} />
        <Tab label="Update History" {...a11yProps(1)} />
        <Tab label="Review Topic" {...a11yProps(2)} />
        <Tab label="Dashboard" {...a11yProps(3)} />
      </SideTaps>
      <TabPanel value={value} index={0}>
        App Info
        {children}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Update History
      </TabPanel>
      <TabPanel value={value} index={2}>
        Review Topic
      </TabPanel>
      <TabPanel value={value} index={3}>
        Dashboard
      </TabPanel>
    </Wrapper>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Wrapper = styled("div")(() => ({
  display: "flex",
  height: "100%",
  backgroundColor: "#F5F6FA",
}));

const SideTaps = styled(Tabs)(() => ({
  backgroundColor: "white",
  padding: "30px 0 500px 0",
}));
