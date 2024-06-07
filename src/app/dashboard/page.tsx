import React from "react";

type props = {
  administrador: "admin";
  email: string;
  numero: number;
};

export default function Dashboard(props: props) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <div className="rounded p-6 shadow-md">
        <p className="">
          Aquí puedes gestionar tus productos y ver estadísticas.
        </p>
        <p>Bienvenido, {props.administrador}</p>
        {/* Añade más contenido y funcionalidad al dashboard según tus necesidades */}
      </div>
    </div>
  );
}
