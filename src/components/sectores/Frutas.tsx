import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
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

const Frutas = ({ pais }: Props) => {
  const [data, setData] = useState<DataFrutas[]>([]);
  const [topImportadores, setTopImportadores] = useState<
    { name: string; value: number }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

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

        // Calcular los top importadores
        const topImportadoresData = frutas
          .map((item) => ({ name: item.importadores, value: item[2023] }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 10); // Obtener los primeros 10 importadores

        setTopImportadores(topImportadoresData);
      }
    };

    fetchData();
  }, [pais]);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const pieChartOptions: Highcharts.Options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Top 10 Importadores de Frutas",
    },
    series: [
      {
        type: "pie", // Add the type property with the value "pie"
        name: "Valor exportado en 2023",
        data: topImportadores.map((item) => ({
          name: item.name,
          y: item.value,
        })),
      },
    ],
    credits: {
      text: "VentureX",
    },
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
              {currentPageData.map((item) => (
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
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName="flex justify-center mt-4 space-x-2"
            pageClassName="flex items-center justify-center w-10 h-10 border border-gray-300 rounded"
            pageLinkClassName="flex items-center justify-center w-full h-full"
            previousClassName="flex items-center justify-center w-10 h-10 border border-gray-300 rounded"
            previousLinkClassName="flex items-center justify-center w-full h-full"
            nextClassName="flex items-center justify-center w-10 h-10 border border-gray-300 rounded"
            nextLinkClassName="flex items-center justify-center w-full h-full"
            breakClassName="flex items-center justify-center w-10 h-10 border border-gray-300 rounded"
            breakLinkClassName="flex items-center justify-center w-full h-full"
            activeClassName="bg-blue-500 text-white"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
        <div className="col-span-2">
          {/* Grafico de Pastel */}
          <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
        </div>
      </div>
    </>
  );
};

export default Frutas;
