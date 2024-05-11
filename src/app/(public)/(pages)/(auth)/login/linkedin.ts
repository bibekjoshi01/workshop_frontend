export const LINKEDIN_AUTH_URL: string =
  "https://www.linkedin.com/oauth/v2/authorization";
export const LINKEDIN_SCOPE: string = "r_liteprofile r_emailaddress";

export const PROVIDER = {
  LINKEDIN: "LINKEDIN",
};

export const PROVIDER_NAME = {
  [PROVIDER.LINKEDIN]: "LinkedIn",
};

const getURLWithQueryParams = (
  base: string,
  params: { [key: string]: any }
): string => {
  const query: string = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  return `${base}?${query}`;
};

export const getRedirectUri = (provider: string): string =>
  `${window.location.origin}${
    process.env.OAUTH
  }?provider=${provider.toLowerCase()}`;

export const getProvidersUrls = (): { [key: string]: string } => ({
  [PROVIDER.LINKEDIN]: getURLWithQueryParams(LINKEDIN_AUTH_URL, {
    response_type: "code",
    client_id: process.env.NEXT_APP_LINKEDIN_CLIENT_ID,
    redirect_uri: getRedirectUri(PROVIDER.LINKEDIN),
    scope: LINKEDIN_SCOPE,
  }),
});
