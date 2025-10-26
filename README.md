# Portfolio Site

情報系大学生のポートフォリオサイトです。

## 技術スタック

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- next-themes (ダークモード対応)

## 環境変数の設定

個人情報を保護するため、以下の環境変数を設定してください：

1. `.env.local` ファイルを作成
2. 以下の内容を記入：

```bash
# 個人情報
NEXT_PUBLIC_PROFILE_NAME=あなたの名前
NEXT_PUBLIC_PROFILE_AGE=年齢
NEXT_PUBLIC_PROFILE_LOCATION=所在地
NEXT_PUBLIC_PROFILE_EMAIL=your-email@example.com
NEXT_PUBLIC_PROFILE_PHONE=電話番号
NEXT_PUBLIC_PROFILE_IMAGE=/your-profile-image.jpg

# ソーシャルリンク
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
```

## 開発サーバーの起動

```bash
bun install
bun run dev
```

## デプロイ

環境変数を設定してからデプロイしてください。

### Vercel の場合

Vercel のダッシュボードで以下の環境変数を設定：

- `NEXT_PUBLIC_PROFILE_NAME`
- `NEXT_PUBLIC_PROFILE_AGE`
- `NEXT_PUBLIC_PROFILE_LOCATION`
- `NEXT_PUBLIC_PROFILE_EMAIL`
- `NEXT_PUBLIC_PROFILE_PHONE`
- `NEXT_PUBLIC_GITHUB_URL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `NEXT_PUBLIC_TWITTER_URL`

## 注意事項

- `.env.local` ファイルは GitHub にアップロードされません
- 個人情報は環境変数で管理し、コードには直接記述しないでください
