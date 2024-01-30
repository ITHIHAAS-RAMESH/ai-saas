import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

const landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <div>
        <Link href="/sign-up">
          <Button>Sign Up</Button>
        </Link>
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
      </div>
    </div>
  );
};

export default landing;
