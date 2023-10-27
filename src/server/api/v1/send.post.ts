import { google } from "googleapis";

export default defineEventHandler(async (event) => {
  const host = getHeader(event, "host");
  const cityHeader = getHeader(event, "x-vercel-ip-city");
  const city = cityHeader ? decodeURIComponent(cityHeader) : "-";
  const stateHeader = getHeader(event, "x-vercel-ip-country-region");
  const state = stateHeader ? decodeURIComponent(stateHeader) : "-";
  const ipHeader = getHeader(event, "x-forwarded-for");
  const ip = ipHeader ? ipHeader.split(",")[0] : "-";

  const session = getCookie(event, "session");
  const body = await readBody<{
    action: string;
    nome: string;
    celular: string;
    email: string;
  }>(event);

  try {
    const auth = new google.auth.JWT(
      process.env.client_email,
      undefined,
      process.env.private_key?.replace(/\\n/g, "\n"),
      [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/drive",
      ]
    );

    const SheetName = () => {
      if ( body.action === "MasterVaz" ) return "MasterVaz";
      return "Cadastro"
    }

    const sheets = google.sheets({ version: "v4", auth });
    // @ts-expect-error
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: `${SheetName()}!A3`,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            body.nome,
            body.celular,
            body.email,
            new Date(),
            session,
            body.action,
            ip,
            city,
            state,
            host,
          ],
        ],
      },
    });
    console.log("teste")
    return { message: "Sucesso!" };
  } catch (err) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Erro ao cadastrar!",
      })
    );
  }
});