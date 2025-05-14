import React from "react";
import Button from "../../atoms/Button";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/atoms/Text";

const Button42Login: React.FC = () => {
  const login42URL = process.env.NEXT_PUBLIC_LOGIN_42_API_URL as string;
  return (
    <Link href={login42URL}>
      <Button className="btn-42">
        <Image src="/logo42.svg" alt="42" width={20} height={20} />
        <Text>Login with 42</Text>
      </Button>
    </Link>
  );
};

export default Button42Login;
