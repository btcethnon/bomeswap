import { AtomBox, AtomBoxProps } from "@pancakeswap/ui";
import { ReactNode } from "react";
import { pageVariants } from "./SwapWidget.css";

type SwapPageProps = AtomBoxProps & {
  removePadding?: boolean;
  hideFooterOnDesktop?: boolean;
  noMinHeight?: boolean;
  helpUrl?: string;
  helpImage?: ReactNode;
  externalText?: string;
  externalLinkUrl?: string;
};

export const SwapPage = ({
  removePadding,
  noMinHeight,
  children,
  hideFooterOnDesktop,
  ...props
}: SwapPageProps) => (
  <AtomBox className={pageVariants({ removePadding, noMinHeight })} {...props}>
    {children}
    <AtomBox display="flex" flexGrow={1} />
    <AtomBox display={["block", null, null, hideFooterOnDesktop ? "none" : "block"]} width="100%" />
  </AtomBox>
);
