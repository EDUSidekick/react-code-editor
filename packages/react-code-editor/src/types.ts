export interface File {
  id?: string;
  name: string;
  language: string;
  content: string;
  deletable?: boolean;
}
