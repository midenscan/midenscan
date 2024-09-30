export type MidenAccountType =
  | 'FungibleFaucet'
  | 'NonFungibleFaucet'
  | 'RegularAccountImmutableCode'
  | 'RegularAccountUpdatableCode'
  | '%future added value' 

export type OrderBy =
  | 'asc'
  | 'desc'
  | '%future added value' 

export type AccountUpdatesSortBy =
  | 'commited_at'
  | '%future added value' 

export type AccountsSortBy =
  | 'timestamp'
  | '%future added value' 

export type BlocksSortBy =
  | 'timestamp'
  | '%future added value' 

export type MidenNoteStatus =
  | 'COMMITTED'
  | 'CONSUMED'
  | 'UNKNOWN'
  | '%future added value' 

export type MidenNoteType =
  | 'Encrypted'
  | 'Private'
  | 'Public'
  | '%future added value' 

export type NotesSortBy =
  | 'commited_at'
  | '%future added value' 

export type TransactionsSortBy =
  | 'commited_at'
  | '%future added value' 
