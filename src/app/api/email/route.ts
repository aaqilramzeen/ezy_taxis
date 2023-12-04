import BookingEmail from "@/app/emails/booking";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const data = await resend.emails.send({
      from: "EZY Taxis Bookings <mail@ezytaxis.co.uk>",
      to: ["aaqil.ramzeen@gmail.com"],
      subject: "New Booking",
      react: BookingEmail({ ...body }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
