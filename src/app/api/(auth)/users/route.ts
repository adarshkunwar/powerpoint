import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
  try {
    await dbConnect();
    const users = await User.find();
    console.log(users);
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching users" + error.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    console.log(body);

    await dbConnect();
    const newUser = new User(body);
    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "user is created", user: newUser }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in fetching users" + error.message, {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { userId, newUsername } = body;

    await dbConnect();
    if (!userId || !newUsername) {
      return new NextResponse(JSON.stringify({ message: "invalid response" }), {
        status: 400,
      });
    }

    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ message: "invalid user id" }), {
        status: 400,
      });
    }

    const updatedUser = await User.findOneAndUpdate(
      {
        _id: new ObjectId(userId),
      },
      {
        username: newUsername,
      },
      {
        new: true,
      }
    );

    if (!updatedUser) {
      return new NextResponse(
        JSON.stringify({ message: "user not found in the database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "User is updated",
        user: updatedUser,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse("Error in fetching users" + error.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    if (!userId) {
      return new NextResponse(
        JSON.stringify({
          message: "id or new username not found",
        }),
        {
          status: 400,
        }
      );
    }

    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({
          message: "Invalid user id",
        }),
        {
          status: 400,
        }
      );
    }

    const deletedUser = await User.findOneAndDelete({
      _id: new ObjectId(userId),
    });
    if (!deletedUser) {
      return new NextResponse(
        JSON.stringify({
          message: " user id not found",
        }),
        {
          status: 400,
        }
      );
    }
    return new NextResponse(
      JSON.stringify({
        message: "User is deleted",
        user: deletedUser,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message: "error while deleting the user " + error.message,
      }),
      {
        status: 500,
      }
    );
  }
};
