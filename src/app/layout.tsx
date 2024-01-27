import type { PropsWithChildren } from "react";
import { ToasterWrapper } from "~/components/ToastProvider";

// do not cache this layout
export const revalidate = 0;

export default function Layout(props: PropsWithChildren<{}>) {
  return (
    <html>
    <head></head>
    <body>
    <ToasterWrapper />
    {props.children}
    </body>
    </html>
  );
}
