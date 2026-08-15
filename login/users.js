/**
 * 管理者が設定するログイン情報
 * パスワードは SHA-256 ハッシュ値で記載してください。
 *
 * ハッシュの生成方法（ブラウザのコンソールで実行）:
 *   const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('パスワード'));
 *   console.log([...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join(''));
 */
window.SIMPLE_USERS = [
  // 例: { id: "user01", hash: "sha256のハッシュ値" }
  // ↓ ここにIDとハッシュを追加してください
];
