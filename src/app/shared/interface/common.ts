export interface columnsModel {
  caption: string;
  dataField: string;
  isTemplate: Boolean;
  style?: {};
  isHeaderTemplate?: boolean;
  isTooltip?: boolean;
}

export interface loginModel {
  access_token: string;
  user: userModel | string;
}

export interface userModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  createdAt: string;
  updatedAt: string;
}

export interface commonModel {
  message: string;
  data: any;
}
