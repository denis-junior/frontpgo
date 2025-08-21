import React from "react";

type IconProps = {
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  type?: string;
  children?: React.ReactNode;
};

export default function Icon({ as: Component = "i", className, style, type, children,}: IconProps) {
  return (
    <Component
      style={style}
      className={className ? className : "material-icons"}
    >
      {type || children}
    </Component>
  );
}
