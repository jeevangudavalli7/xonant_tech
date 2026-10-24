import { NextResponse } from "next/server";
import { estimatorSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate payload against Zod schema
    const validationResult = estimatorSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;

    // Log received transmission server-side
    console.log("[XONANT TRANSMISSION LOGGED]", {
      timestamp: new Date().toISOString(),
      projectType: validData.projectType,
      projectStage: validData.projectStage,
      budget: validData.budget,
      timeline: validData.timeline,
      name: validData.name,
      email: validData.email,
      company: validData.company || "N/A",
    });

    // In production, this can seamlessly route to Resend/SendGrid email, Supabase/PostgreSQL database, or webhook

    return NextResponse.json(
      {
        success: true,
        message: "Transmission received successfully.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API ESTIMATE ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error processing transmission.",
      },
      { status: 500 }
    );
  }
}
