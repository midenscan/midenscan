export function block(blockIdentifier: Nullable<string | number>) {
  return `/block/${blockIdentifier}`;
}

export function account(accountId: string) {
  return `/account/${accountId}`;
}

export function transaction(transactionId: string) {
  return `/tx/${transactionId}`;
}

export function note(noteId: string) {
  return `/note/${noteId}`;
}

export function nullifier(nullifier: string) {
  return `/nullifier/${nullifier}`;
}

export function search(filter: string) {
  return `/search/${filter}`;
}

export const home = "/";
export const blocks = "/blocks";
export const transactions = "/txs";
export const accounts = "/accounts";
export const account_updates = "/account-updates";
export const notes = "/notes";
export const nullifiers = "/nullifiers";
