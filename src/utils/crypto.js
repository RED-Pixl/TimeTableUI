`
THIS FILE IS ALREADY PREPPED FOR THE TAURI APP
`

import { writeTextFile, readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import { encrypt, decrypt } from '@tauri-apps/api/crypto';

const encryptionKey = "THIS SHOULD BE AN ENV VARIABLE!!!";

export async function encryptAndSaveTokens(jwt, refreshToken) {
  try {
    const tokens = JSON.stringify({ jwt, refreshToken });

    const encryptedTokens = await encrypt({
      text: tokens,
      key: encryptionKey,
    });

    await writeTextFile({
      path: 'tokens.txt',
      contents: encryptedTokens,
      dir: BaseDirectory.App,
    });
  } catch (error) {
    console.error('Error encrypting and saving tokens:', error);
  }
}

export async function decryptAndReadTokens() {
  try {
    const encryptedTokens = await readTextFile({
      path: 'tokens.txt',
      dir: BaseDirectory.App,
    });

    const decryptedTokens = await decrypt({
      text: encryptedTokens,
      key: encryptionKey,
    });

    const { jwt, refreshToken } = JSON.parse(decryptedTokens);
    return { jwt, refreshToken };
  } catch (error) {
    console.error('Error decrypting and reading tokens:', error);
    return { jwt: null, refreshToken: null };
  }
}