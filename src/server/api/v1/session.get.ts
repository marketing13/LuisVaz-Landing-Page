import { v4 as uuid } from 'uuid';
import { google } from 'googleapis';

export default defineEventHandler(async (event) => {
  const INITIAL_ID = uuid()
  const session = getCookie(event, 'session');
  const host = getHeader(event, 'host')
  const cityHeader = getHeader(event, 'x-vercel-ip-city')
  const city = cityHeader ? decodeURIComponent(cityHeader) : '-'
  const stateHeader = getHeader(event, 'x-vercel-ip-country-region')
  const state = stateHeader ? decodeURIComponent(stateHeader) : '-'
  const ipHeader = getHeader(event, 'x-forwarded-for')
  const ip = ipHeader ? ipHeader.split(',')[0] : '-'
  const query = getQuery(event)
  if(!session) {
    setCookie(event, 'session', INITIAL_ID)
  }
  try {
    const validId = session ?? INITIAL_ID
    const auth = new google.auth.JWT(
      process.env.client_email,
      undefined,
      process.env.private_key?.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/drive']
    )
    const sheets = google.sheets({ version: 'v4', auth });
    // @ts-expect-error
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Sessions!A3',
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [validId, new Date, ip, city, state, host, query.name, query.token ]
        ]
      }
    });
  } catch (err) {
    console.warn('Erro: ', err);
  }
  return 'Success';
})