"use client";

import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as actions from "@/actions/index";

export default function HeaderAuth() {
  //get the current session object
  const session = useSession();
  let authContent: React.ReactNode;
  // in client componnet to access user data from  session
  if (session.status == "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" variant="bordered" color="secondary">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signOut}>
            <Button type="submit" variant="flat" color="primary">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
}
