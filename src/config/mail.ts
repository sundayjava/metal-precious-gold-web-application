"use server";

import logo from '../../public/logo.png'
import nodemailer from "nodemailer";

export async function sendMail({
  to,
  firstname,
  lastname,
}: {
  to: string;
  firstname: string;
  lastname: string;
}) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject:"your WARET GOLD welcome gift",
      html: `
      <!DOCTYPE html>

<html
  lang="en"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <!--[if !mso]><!-->
    <!--<![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }

      p {
        line-height: inherit;
      }

      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }

      .image_block img + div {
        display: none;
      }

      @media (max-width: 620px) {
        .desktop_hide table.icons-inner {
          display: inline-block !important;
        }

        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }

        .mobile_hide {
          display: none;
        }

        .row-content {
          width: 100% !important;
        }

        .stack .column {
          width: 100%;
          display: block;
        }

        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body
    style="
      background-color: #000000;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #000000;
      "
      width="100%"
    >
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-1"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        color: #000000;
                        width: 600px;
                        margin: 0 auto;
                      "
                      width="600"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              font-weight: 400;
                              text-align: left;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="5.333333333333336%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    width: 100%;
                                    padding-right: 0px;
                                    padding-left: 0px;
                                  "
                                >
                                  <div
                                    align="right"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <div style="max-width: 50px">
                                      <img
                                        alt="I'm an image"
                                        height="auto"
                                        src=${logo}
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 100%;
                                        "
                                        title="I'm an image"
                                        width="50"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td
                            class="column column-2"
                            style="
                              font-weight: 400;
                              text-align: left;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="66.66666666666667%"
                          >
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="heading_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <h2
                                    style="
                                      margin: 0;
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 30px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: left;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 36px;
                                    "
                                  >
                                    <span class="tinyMce-placeholder"
                                      >WARET GOLD</span
                                    >
                                  </h2>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-2"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        color: #000000;
                        width: 600px;
                        margin: 0 auto;
                      "
                      width="600"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              font-weight: 400;
                              text-align: left;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="paragraph_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #e7e7e7;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 16px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 19.2px;
                                    "
                                  >
                                    <p style="margin: 0; margin-bottom: 16px">
                                      Hello ${firstname} ${lastname}
                                    </p>
                                    <p style="margin: 0; margin-bottom: 16px">
                                      As you begin your precious metals journey,
                                      let us give you a golden gift
                                    </p>
                                    <p style="margin: 0; margin-bottom: 16px">
                                      <strong>€50 discount </strong>on your
                                      first gold purchase with WARET GOLD for a
                                      minimum purchase amount of €1000
                                    </p>
                                    <p style="margin: 0"> </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="button_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:38px;width:178px;v-text-anchor:middle;" arcsize="11%" stroke="false" fillcolor="#fd7e14">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center style="color:#ffffff; font-family:Arial, sans-serif; font-size:14px">
<![endif]-->
                                    <div
                                      style="
                                        text-decoration: none;
                                        display: inline-block;
                                        color: #ffffff;
                                        background-color: #fd7e14;
                                        border-radius: 4px;
                                        width: auto;
                                        border-top: 0px solid transparent;
                                        font-weight: 400;
                                        border-right: 0px solid transparent;
                                        border-bottom: 0px solid transparent;
                                        border-left: 0px solid transparent;
                                        padding-top: 5px;
                                        padding-bottom: 5px;
                                        font-family: 'Helvetica Neue', Helvetica,
                                          Arial, sans-serif;
                                        font-size: 14px;
                                        text-align: center;
                                        mso-border-alt: none;
                                        word-break: keep-all;
                                      "
                                    >
                                      <span
                                        style="
                                          padding-left: 20px;
                                          padding-right: 20px;
                                          font-size: 14px;
                                          display: inline-block;
                                          letter-spacing: normal;
                                        "
                                        ><span
                                          style="
                                            word-break: break-word;
                                            line-height: 28px;
                                          "
                                          >USE YOUR COUPON</span
                                        ></span
                                      >
                                    </div>
                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-3"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        color: #000000;
                        width: 600px;
                        margin: 0 auto;
                      "
                      width="600"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              font-weight: 400;
                              text-align: left;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="paragraph_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #e4e4e4;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 16px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 19.2px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      How to use this discount code?
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <!--[if mso
                              ]><style>
                                #list-r2c0m1 ul {
                                  margin: 0 !important;
                                  padding: 0 !important;
                                }
                                #list-r2c0m1 ul li {
                                  mso-special-format: bullet;
                                }
                                #list-r2c0m1 .levelOne li {
                                  margin-top: 0 !important;
                                }
                                #list-r2c0m1 .levelOne {
                                  margin-left: -20px !important;
                                }
                                #list-r2c0m1 .levelTwo li {
                                  margin-top: 0 !important;
                                }
                                #list-r2c0m1 .levelTwo {
                                  margin-left: 10px !important;
                                }
                                #list-r2c0m1 .levelThree li {
                                  margin-top: 0 !important;
                                }
                                #list-r2c0m1 .levelThree {
                                  margin-left: 40px !important;
                                }
                                #list-r2c0m1 .levelFour li {
                                  margin-top: 0 !important;
                                }
                                #list-r2c0m1 .levelFour {
                                  margin-left: 70px !important;
                                }
                                #list-r2c0m1 .levelFive li {
                                  margin-top: 0 !important;
                                }
                                #list-r2c0m1 .levelFive {
                                  margin-left: 100px !important;
                                }
                                #list-r2c0m1 .levelSix li {
                                  margin-top: 0 !important;
                                }
                                #list-r2c0m1 .levelSix {
                                  margin-left: 130px !important;
                                }
                              </style><!
                            [endif]-->
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="list_block block-2"
                              id="list-r2c0m1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div class="levelOne" style="margin-left: 0">
                                    <ul
                                      class="leftList"
                                      start="1"
                                      style="
                                        margin-top: 0;
                                        margin-bottom: 0;
                                        padding: 0;
                                        padding-left: 20px;
                                        font-weight: 400;
                                        text-align: left;
                                        color: #fcfcfc;
                                        direction: ltr;
                                        font-family: 'Helvetica Neue', Helvetica,
                                          Arial, sans-serif;
                                        font-size: 16px;
                                        letter-spacing: 0;
                                        line-height: 120%;
                                        mso-line-height-alt: 19.2px;
                                        list-style-type: disc;
                                      "
                                    >
                                      <li
                                        style="
                                          margin-bottom: 0;
                                          text-align: left;
                                        "
                                      >
                                        Log in to your WARET GOLD account
                                      </li>
                                      <li
                                        style="
                                          margin-bottom: 0;
                                          text-align: left;
                                        "
                                      >
                                        Add product to your cart for €1000 or
                                        more
                                      </li>
                                      <li
                                        style="
                                          margin-bottom: 0;
                                          text-align: left;
                                        "
                                      >
                                        Apply the discount code WELCOME50
                                        directly to your cart
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </body>
</html>

      `,
    });

    return sendResult;
  } catch (error) {
    console.log(error);
  }
}
