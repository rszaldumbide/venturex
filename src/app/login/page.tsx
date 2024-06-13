"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
//componentes
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardDescription } from "@/components/ui/card";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Simula un inicio de sesión exitoso
    router.push("/dashboard");
  };

  return (
    <div className="max-h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="py-auto mx-auto grid w-[350px] items-center gap-6">
          <div className="grid gap-2">
            <h1 className="text-center text-3xl font-bold">Iniciar Sesión</h1>
            {/* <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p> */}
            <CardDescription>
              Ingresa tu correo electrónico para acceder a tu cuenta.
            </CardDescription>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
            </div>
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/imgs/misionvision/vision.jpg"
          alt="Image"
          width="2920"
          height="2080"
          className="max-h-screen w-full overflow-hidden object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
