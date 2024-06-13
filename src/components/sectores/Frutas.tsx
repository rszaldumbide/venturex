"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/utils/supabase/Supabase";

type Props = {
  pais: string;
};

type DataFrutas = {
  importadores: string;
  pais: string;
  2019: number;
  2020: number;
  2021: number;
  2022: number;
  2023: number;
};

export default function Frutas({ pais }: Props) {
  const [data, setData] = useState<DataFrutas[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: frutas, error } = await supabase
        .from("frutas")
        .select("*")
        .eq("pais", pais)
        .order("id", { ascending: true });

      if (error) {
        console.error(error);
      } else {
        setData(frutas);
        console.log(frutas);
      }
    };

    fetchData();
  }, [pais]);

  return (
    <>
      <div className="lg:grid lg:grid-cols-7 gap-2">
        <div className="col-span-5">
        <Table className="mb-5">
            <TableHeader>
              <TableRow>
                <TableHead>Importadores</TableHead>
                <TableHead>Valor exportado en 2019</TableHead>
                <TableHead>Valor exportado en 2020</TableHead>
                <TableHead>Valor exportado en 2021</TableHead>
                <TableHead>Valor exportado en 2022</TableHead>
                <TableHead>Valor exportado en 2023</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.importadores}>
                  <TableCell>{item.importadores}</TableCell>
                  <TableCell className="text-center">{item[2019]}</TableCell>
                  <TableCell className="text-center">{item[2020]}</TableCell>
                  <TableCell className="text-center">{item[2021]}</TableCell>
                  <TableCell className="text-center">{item[2022]}</TableCell>
                  <TableCell className="text-center">{item[2023]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="col-span-2">
          {/* aqui metan los pasteles porfa */}
          <h1 className="mx-auto flex justify-center text-center text-2xl font-bold">
            PASTELITOS UwU
          </h1>
        </div>
      </div>
    </>
  );
}
