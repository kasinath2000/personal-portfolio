import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

const Tabs = ({ tabs, tabStyles = {}, contentStyles = {} }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box>
      {/* Tab Headers */}
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        centered
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: tabStyles.indicatorColor || "#00D1FF",
          },
          "& .MuiTab-root": {
            color: tabStyles.textColor || "white",
            fontWeight: tabStyles.fontWeight || "bold",
            fontSize: tabStyles.fontSize || "14px",
            px: tabStyles.paddingX || 2,
            py: tabStyles.paddingY || 1,
          },
          "& .Mui-selected": {
            color: tabStyles.activeColor || "#00D1FF",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      {/* Tab Content */}
      <Box
        sx={{
          mt: 2,
          p: contentStyles.padding || 2,
          backgroundColor: contentStyles.bgColor || "transparent",
          borderRadius: contentStyles.borderRadius || "8px",
        }}
      >
        {tabs[activeTab].content}
      </Box>
    </Box>
  );
};

export default Tabs;
