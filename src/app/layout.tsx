import type { PropsWithChildren } from "react";
import { ReactQueryProvider } from "~/components/ReactQueryProvider";
import { ToasterWrapper } from "~/components/ToastProvider";

// do not cache this layout
export const revalidate = 0;

export default async function Layout(props: PropsWithChildren<{}>) {
  return (
    <html>
    <head></head>
    <body>
    <ToasterWrapper />
    <ReactQueryProvider>{props.children}</ReactQueryProvider>
    </body>
    </html>
  );
}
