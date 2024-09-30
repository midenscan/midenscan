export enum TabOption {
  OVERVIEW = "OVERVIEW",
  CREATED_NOTES = "CREATED_NOTES",
  ACCOUNT_UPDATES = "ACCOUNT_UPDATES",
  ACCOUNT_VAULT_ASSETS = "ACCOUNT_VAULT_ASSETS",
  ACCOUNT_CODE = "ACCOUNT_CODE",
  TRANSACTIONS = "TRANSACTIONS",
  NOTE_ASSETS = "NOTE_ASSETS",
  NOTE_SCRIPT = "NOTE_SCRIPT",
}

export type TabMeta = {
  option: TabOption;
  displayName: string;
  displayCount: Nullable<number>;
  displayIsVerified: Nullable<boolean>;
};
