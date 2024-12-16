import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(req: Request) {
  console.log("API Route Hit: /api/send-email");

  const { to, subject, text, date } = await req.json();
  if (!to || !subject || !text) {
    return NextResponse.json(
      { error: "Missing email fields" },
      { status: 400 }
    );
  }

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const msg = {
      to: "firth.maneesuksri@gmail.com",
      templateId: "d-ff2446efb131491c8a4e2230779192d9",
      dynamicTemplateData: {
        name: "Firth",
        booking_date: "December 15",
        booking_time: "8:00 PM",
      },
      from: "restaurant.gallary@gmail.com",
      subject: "hello",
      // text: "test",
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   console.log("API Route Hit: /api/send-email");

//   const { to, subject, text } = await req.json();
//   console.log("Received Data:", { to, subject, text });

//   if (!to || !subject || !text) {
//     return NextResponse.json({ error: "Missing email fields" }, { status: 400 });
//   }

//   return NextResponse.json({ success: true, message: "Email sent successfully!" });
// }
