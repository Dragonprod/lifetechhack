import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import API from "../../api/api";
import Button from "@mui/material/Button";

function MaximkaPage(props) {
  const [labels, setLabels] = React.useState([]);
  const [dataset, setDataset] = React.useState([]);

  const getData = async (e) => {
    const response = await API.get(`region/income/2`);

    for (var i = 0; i < response.data.length; i++) {
      setLabels((prevLabels) => [...prevLabels, response.data[i].date]);
      setDataset((prevLabels) => [...prevLabels, response.data[i].count]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Region income",
        data: dataset,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

  return (
    <div>
      <Line height={500} width={500} data={data} options={options}/>
    </div>
  );
}

export default MaximkaPage;
