import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Loginlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
      >
        {children}
      </GoogleOAuthProvider>
    </div>
  );
}
