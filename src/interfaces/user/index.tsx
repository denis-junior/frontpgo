export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IChangePasswordRequest {
  email: string;
  newPassword: string;
}

export interface IChangePasswordResponse {
  success: boolean;
  message: string;
}