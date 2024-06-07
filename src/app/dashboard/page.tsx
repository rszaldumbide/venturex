import React from "react";

type props = {
  administrador: string;
  email: string;
  numero: number;
};

export default function Dashboard({
  administrador = "admin",
  email,
  numero,
}: props) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <div className="rounded p-6 shadow-md">
        <p className="">
          Aquí puedes gestionar tus productos y ver estadísticas.
        </p>
        <p>Bienvenido, {administrador}</p>
      </div>
    </div>
  );
}
