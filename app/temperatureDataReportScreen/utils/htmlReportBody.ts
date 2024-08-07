import { handleFormatDate } from '@/utils';

export function htmlReportBody(snapShots: any, clientName: string) {
  const htmlContent = `
<html>
  <head>
    <title>Reporte de Temperaturas</title>
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }

      .header, .footer {
        width: 100%;
        text-align: center;
        position: fixed;
        background: #fff;
        z-index: 1000;
        display: flex;
        align-items: center;
      }

      .header {
        top: 0;
        border-bottom: 1px solid #ccc;
        padding: 10px 20px;
        align-items: center;
        justify-content: flex-start;
      }

      .footer {
        bottom: 0;
        border-top: 1px solid #ccc;
        padding: 10px 20px;
        justify-content: flex-end;
      }

      .content {
        margin: 160px 20px 100px 20px; 
      }

      .report {
        max-width: 1200px;
        margin: 160px auto;
      }

      .report__title {
        font-size: 2em;
        margin-bottom: 10px;
        text-align: center;
      }

      .report__description {
        font-size: 1.2em;
        margin-bottom: 20px;
        text-align: left;
      }

      .report__photos {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
      }

      .report__photos img {
        width: 100%;
        max-width: 300px;
        border-radius: 8px;
      }

      .logo {
      width: 125px;
      height: 92px;
      object-fit: contain;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <img src="https://i.postimg.cc/DZ5kFnDD/tritech-logo.png" alt="tritech-logo" class="logo" />
    </div>
    <div class="content">
      <div class="report">
        <h1 class="report__title">Reporte de Temperaturas de ${clientName?.toLocaleUpperCase()}</h1>
        <p class="report__description">Este reporte presenta los datos de las temperaturas registradas en los bronces de los molinos del día ${handleFormatDate()}. La información se ha recopilado con el objetivo de monitorear el estado de los componentes y detectar posibles anomalías que puedan afectar el funcionamiento de los molinos.</p>
        <div id="photo-container" class="report__photos">
          ${snapShots
            .map(
              (photo: string, index: number) =>
                `<img src="${photo}" alt="Foto del reporte" style="margin-top: ${
                  index > 3 && index < 6
                    ? 350
                    : index > 7 && index < 10
                    ? 465
                    : 0
                }px" />`
            )
            .join('')}
        </div>
      </div>
    </div>
    <div class="footer">
      <img src="https://i.postimg.cc/wv98S7WL/fuchs.png" src="logo-Fuchs" class="logo" />
    </div>
  </body>
</html>
`;

  return htmlContent;
}

export function htmlEmailBody(clientName: string) {
  const htmlBody = `
      <html>
        <body>
          <p>Estimado/a ${clientName?.toLocaleUpperCase()},</p>
          <p>Adjunto encontrará el reporte de temperaturas correspondiente al día ${handleFormatDate()}.</p>
          <p>Por favor, revise el archivo adjunto para obtener detalles adicionales y gráficos. Si tiene alguna pregunta o requiere más información, no dude en contactarnos.</p>
          <p>Gracias,</p>
        </body>
      </html>
      `;

  return htmlBody;
}
