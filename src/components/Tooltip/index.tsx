import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

export default function CustomTooltip({
  children,
  title,
}: {
  children: React.ReactElement;
  title: string;
}) {
  return (
    <Tooltip title={title}  placement="top" arrow  slotProps={{
        tooltip: {
          sx: { fontSize: "1rem" }, // Altere o valor conforme desejar
        },
      }}>
      {children}
    </Tooltip>
  );
}
