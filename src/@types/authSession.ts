export interface AuthSessionResponse {
  authentication: null;
  errorCode: null;
  params: {
    access_token: string;
    'exp://192.168.0.126:19000/--/expo-auth-session': string;
    expires_in: string;
    token_type: string;
  };
  type: string;
  url: string;
}

export interface AuthSessionUserResponse {
  accent_color: number;
  avatar: string;
  avatar_decoration: null;
  banner: null;
  banner_color: string;
  discriminator: string;
  flags: number;
  id: string;
  locale: string;
  mfa_enabled: boolean;
  premium_type: number;
  public_flags: number;
  username: string;
}

