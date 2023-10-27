import { v4 as uuid } from 'uuid';
import { google } from 'googleapis';

export default defineEventHandler(async (event) => {

  const session = getCookie(event, 'session');
  const query = getQuery(event)
  const body = await readBody<{ action: string }>(event)
  try {
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
      range: 'Actions!A3',
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [session, query.token, new Date, body.action]
        ]
      }
    });
  } catch (err) { }
  return 'Success';
})