// お知らせ一覧のデータ。トップページ（最新のみ）とお知らせ一覧ページ（全件）で共有する。
// 項目:
//   date       表示日付（例 "2026.10.23"）
//   tag        カテゴリ（お知らせ / 体験会 / 活動 など）
//   highlight  true で本文とボタンを表示する強調カード
//   ended      true で「開催終了」バッジ＋グレー表示
//   title/body 見出し・本文
//   detailLink カード全体と「詳細」ボタンのリンク先
//   applyLink  「お申し込みはこちら」ボタンのリンク先（highlight のときだけ任意で表示）
export const news = [
  {
    date: "2026.10.23", tag: "お知らせ", highlight: true, ended: false,
    title: "ホームページから練習の確認・ゲスト参加の申し込みができるようになりました",
    body: "公式サイトの「活動予定」から、今後の練習の日程・場所・空き状況をどなたでも確認できます。各練習の「ゲストとして参加登録」から、はじめての方もメールまたはGoogleでアカウントを作って参加申し込みができます。ぜひお知り合いにもご案内ください！",
    detailLink: "/guest-guide",
    applyLink: "/#schedule",
  },
  {
    date: "2026.08.11", tag: "体験会", highlight: false, ended: false,
    title: "第1回 ピックルボール体験会を開催しました！",
    body: "8月9日（日）に開催した第1回体験会は無事終了しました。たくさんのご参加ありがとうございました！",
    detailLink: "/trial-session-vol1-report",
  },
  {
    date: "2026.07.05", tag: "体験会", highlight: false, ended: true,
    title: "第1回 ピックルボール体験会を開催します！",
    body: "8月9日（日）開催！定員に達したため募集を締め切りました。次回の体験会情報は Instagram でお知らせします。",
    detailLink: "/trial-session-vol1",
  },
  {
    date: "2026.07.01", tag: "お知らせ", highlight: false,
    title: "AKI PICKLES 公式サイトを公開しました",
    body: "広島県安芸郡府中町を拠点とするピックルボールクラブ「AKI PICKLES」の公式サイトがオープンしました。活動情報は随時更新していきます。",
    detailLink: "/news-2",
  },
  {
    date: "2026.06.20", tag: "活動", highlight: false,
    title: "クラブ発足のごあいさつ",
    body: "「安芸」と「秋」を掛けた名前のとおり、地域に根ざしながらじっくり育っていくクラブを目指します。どうぞよろしくお願いします。",
    detailLink: "/news-3",
  },
];
