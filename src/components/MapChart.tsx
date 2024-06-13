import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    GeographyProps,
} from "react-simple-maps";
import worldMapData from "../../public/json/world-110m.json";

interface MapChartProps {
  onCountrySelect: (country: Country) => void;
  selectedCountry?: Country | null;
}

const MapChart: React.FC<MapChartProps> = ({ onCountrySelect, selectedCountry }) => {
    const handleCountryClick = (
        geo: GeographyProps & { properties: { name: string } }
    ) => {
        onCountrySelect({ name: geo.properties.name });
        // Ver en consola log
        console.log(geo.properties);
    };

    return (
        <div className="flex justify-center">
            <ComposableMap className="w-full h-full">
                <Geographies geography={worldMapData}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onClick={() => handleCountryClick(geo)}
                                style={{
                                    default: {
                                        fill: selectedCountry && selectedCountry.name === geo.properties.name
                                            ? "#326daf" // Color de relleno para el país seleccionado
                                            : "#D6D6DA",
                                        outline: "none",
                                    },
                                    hover: {
                                        fill: "#326daf",
                                        outline: "none",
                                    },
                                    pressed: {
                                        fill: "#326daf",
                                        outline: "none",
                                    },
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default MapChart;
