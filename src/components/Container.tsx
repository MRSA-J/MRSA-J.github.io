import { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  maxWidth?: string;
  padding?: string;
  className?: string;
  style?: CSSProperties;
}

export default function Container({
  children,
  maxWidth = "1200px",
  padding = "0 1rem",
  className = "",
  style = {},
}: ContainerProps) {
  const containerStyle: CSSProperties = {
    width: "100%",
    maxWidth,
    margin: "0 auto",
    padding,
    ...style,
  };

  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
} 