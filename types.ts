
export interface ClonedApp {
  id: string;
  name: string;
  icon: string;
  label: string;
  themeColor: string;
}

export enum Tab {
  Home = 'Home',
  Apps = 'Apps',
  Vault = 'Vault',
  Profile = 'Profile'
}
