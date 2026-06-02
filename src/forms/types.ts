export interface RegisterFields {
  username: string;
  email: string;
  emailConfirm: string;
  password: string;
  devSkills: number;
  terms: boolean;
}

export interface CompanyFields {
  name: string;
  revenue: string;
  assets: number;
  products: string;
  productsMultiselect: { value: string; label: string };
  productsStatus: string;
}

export interface MarkdownFields {
  content: string;
}

export interface FileUploadFields {
  myFileUpload: File;
  myDropZone: File;
}

export interface NestedClubFields {
  club: {
    name: string;
    city: string;
  };
  members: {
    firstname: string;
    lastname: string;
    hobbies: string[];
  }[];
}
