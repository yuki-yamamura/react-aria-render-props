"use client";

import type { ComponentPropsWithRef } from "react";
import { Button } from "react-aria-components";

type Props = ComponentPropsWithRef<typeof Button>;

export const HoverButton = (props: Props) => (
  <Button {...props}>
    {({ isHovered }) => (isHovered ? "ホバー中 🐁" : "ホバーしてください")}
  </Button>
);
