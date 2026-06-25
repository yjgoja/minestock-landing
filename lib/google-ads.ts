export const GOOGLE_ADS_ID = "AW-18261174534";

export const GOOGLE_ADS_CONVERSION = "AW-18261174534/401JCM-3h8UcEIbSzYNE";

export const GOOGLE_ADS_GTAG_INLINE = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');
`.trim();

export const GOOGLE_ADS_CONVERSION_INLINE = `
gtag('event', 'conversion', {
  'send_to': '${GOOGLE_ADS_CONVERSION}',
  'value': 1.0,
  'currency': 'KRW'
});
`.trim();
