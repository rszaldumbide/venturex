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
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Skeleton } from "../ui/skeleton";

type Props = {
  pais: string;
};

type DataMetalurgico = {
  importadores: string;
  pais: string;
  2019: number;
  2020: number;
  2021: number;
  2022: number;
  2023: number;
};

export default function Metalurgico({ pais }: Props) {
  const [data, setData] = useState<DataMetalurgico[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [topImportadores, setTopImportadores] = useState<
    { name: string; value: number }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: metalurgico, error } = await supabase
        .from("metalurgico")
        .select("*")
        .eq("pais", pais)
        .order("id", { ascending: true });

      if (error) {
        console.error(error);
      } else {
        setData(metalurgico);
        setLoading(false);
        console.log(metalurgico);

        // Calcular los top importadores
        const topImportadoresData = metalurgico
          .map((item) => ({ name: item.importadores, value: item[2023] }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 10); // Obtener los primeros 10 importadores

        setTopImportadores(topImportadoresData);
      }
    };

    fetchData();
  }, [pais]);

  const pieChartOptions: Highcharts.Options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Top 10 Importadores de Productos Metalúrgicos",
    },
    series: [
      {
        type: "pie", // Add the type property here
        name: "Valor Exportado",
        data: topImportadores.map((importador) => ({
          name: importador.name,
          y: importador.value,
        })),
      },
    ],
  };

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
              {loading ? (
                <>
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                    <Skeleton className="h-[545px]" />
                    </TableCell>
                  </TableRow>
                </>
              ) : (
                <>
                  {data.map((item) => (
                    <TableRow key={item.importadores}>
                      <TableCell>{item.importadores}</TableCell>
                      <TableCell className="text-center">
                        {item[2019]}
                      </TableCell>
                      <TableCell className="text-center">
                        {item[2020]}
                      </TableCell>
                      <TableCell className="text-center">
                        {item[2021]}
                      </TableCell>
                      <TableCell className="text-center">
                        {item[2022]}
                      </TableCell>
                      <TableCell className="text-center">
                        {item[2023]}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="col-span-2">
          {/* Grafico de Pastel */}
          <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
        </div>
      </div>
    </>
  );
}
