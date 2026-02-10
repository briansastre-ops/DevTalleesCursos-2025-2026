import { userContext } from "@/09-useContext/Context/userContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const LoginPage = () => {
  const { login } = useContext(userContext);

  const navigation = useNavigate();

  const [userID, setUserID] = useState("");
  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = login(+userID);

    if (!result) {
      toast.error("User not found");
      return;
    }

    navigation("/profile");
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold mt-10">Login Page</h1>
      <hr />

      <form className=" flex flex-col gap-2 my-10 mt-5" onSubmit={HandleSubmit}>
        <Input
          type="Number"
          placeholder="ID - Username"
          value={userID}
          onChange={(event) => setUserID(event.target.value)}
        />

        <Button ClassName="w-full" type="submit">
          Login
        </Button>
      </form>

      <Link to="/about">
        <Button variant="ghost" className="w-full">
          Volver a la Pagina Principal
        </Button>
      </Link>
    </div>
  );
};
