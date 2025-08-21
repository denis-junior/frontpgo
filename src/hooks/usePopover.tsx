import { useState, useCallback } from "react";

export function usePopover<T extends HTMLElement = HTMLElement>() {
  const [anchorEl, setAnchorEl] = useState<T | null>(null);

  const openPopover = useCallback((event: React.MouseEvent<T>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const closePopover = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);

  return { anchorEl, open, openPopover, closePopover };
}
