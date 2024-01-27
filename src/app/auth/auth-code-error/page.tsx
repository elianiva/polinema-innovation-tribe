import { Footer } from "~/components/Footer";

type AuthCodeErrorPageProps = {
  searchParams?: Record<string, string | string[] | undefined>
}

export default function AuthCodeErrorPage(props: AuthCodeErrorPageProps) {
  const errorCode = props.searchParams?.error_code ?? 500;
  const errorDescription = props.searchParams?.error_description ?? "Unknown Error";

  return (
    <div className="flex justify-between flex-col h-full">
      <div className="flex-1">
        <main className="h-full flex flex-col items-center justify-center">
          <h1 className="text-3xl text-white font-medium">Authentication Error</h1>
          <p className="text-slate-500 text-lg mb-8">
            Please report this issue to the developer.
          </p>
          <span className="text-white text-6xl font-bold">
            {errorCode}
          </span>
          <p className="text-slate-400 text-lg">{errorDescription}</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}