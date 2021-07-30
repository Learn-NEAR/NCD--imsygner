import { Context, logging, storage } from "near-sdk-as";

export function setPhoto(short_code: string, photo_url: string): void {
  const account_id = Context.sender;

  logging.log(
    'Saving instagram shortcode "' +
      short_code +
      '" photo URL"' +
      photo_url +
      '" for account "' +
      account_id +
      '"'
  );
  storage.set(account_id, short_code);
  storage.set(short_code, photo_url);
}

export function getPhotoByShortCode(shortCode: string): string | null {
  return storage.get<string>(shortCode);
}

export function getShortCodeByAccountId(accountId: string): string | null {
  return storage.get<string>(accountId);
}
