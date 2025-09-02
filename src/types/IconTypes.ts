import { LucideIcon } from "lucide-react";
import React from "react";

export interface IconTypes {
  name: string;
  icon: LucideIcon | string | React.ElementType;
  link?: string;
}

