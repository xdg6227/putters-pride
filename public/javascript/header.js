import Head from "next/head";

export default function PPHeader(_pageTitle) {
  let title = `${_pageTitle.title} | Putters Pride`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://xgarciadevs.github.io/putters-pride/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://xgarciadevs.github.io/putters-pride/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://xgarciadevs.github.io/putters-pride/favicon-16x16.png" />

      <meta property="og:title" content="Putters Pride" />
      <meta property="og:site_name" content="Miniature Golf Course in Denver" />
      <meta property="og:description" content="54 holes of adventure, travel through time with dragons and towns to live out your fantasies." />
      <meta property="og:keywords" content="mini golf holes, putter hole, miniature golf holes, gold pride putters, putters pride, putters pride mini golf, best mini golf holes, putters pride Denver, best miniature golf holes, miniature golf, Denver miniature golf, miniature golf course, Denver mini golf, mini golf, minigolf, golf kids, mini putt putt, putt putt golf, Denver mini putt, Denver miniputt, miniature golfing, minuture golf" />
      <meta property="og:image" content="https://xgarciadevs.github.io/putters-pride/media/putterspride.png" />
      <meta property="og:url" content="http://putterspride.com/" />

      <meta name="twitter:title" content="Putters Pride" />
      <meta name="twitter:image:alt" content="Logo for Putters Pride." />
      <meta name="twitter:description" content="54 holes of adventure, travel through time with dragons and towns to live out your fantasies." />
      <meta name="twitter:image" content="https://xgarciadevs.github.io/putters-pride/media/putterspride.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
};