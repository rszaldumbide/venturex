import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  GeographyProps,
} from "react-simple-maps";
import worldMapData from "../../public/json/world-110m.json";

interface Country {
  name: string;
}

interface MapChartProps {
  onCountrySelect: (country: Country) => void;
}

const MapChart: React.FC<MapChartProps> = ({ onCountrySelect }) => {
  const handleCountryClick = (
    geo: GeographyProps & { properties: { NAME: string } },
  ) => {
    onCountrySelect({ name: geo.properties.NAME });
    console.log(geo.properties); // Ver en consola
  };

  return (
    <div>
      <ComposableMap>
        <Geographies geography={worldMapData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleCountryClick(geo)}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
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
