import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHolidays from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  const [vacanza, setVacanza] = useState([]);
  const [selected, setSelected] = useState(0);

  // console.log(vacanza.data[selected]);

  const postiApi = async () => {
    //Funzione per prendere l'api
    const response = await axios.get(url);
    setVacanza(response.data);
    console.log(response.data);
  };

  const showNext = () => {
    setSelected((prevValue) => {
      if (prevValue + 1 === vacanza.data.length ) {
        return 0
      } else {
        return prevValue + 1;
      }
    })
  }

  const showPerv = () => {
    setSelected((prevValue) => {
      if (prevValue - 1 < 0) {
        return vacanza.data.length - 1
      } else {
        return prevValue - 1
      }
    })
  }

  useEffect(() => {
    postiApi();
  }, []);

  if (vacanza.success) {
    return <div>
      {/* {vacanza.data.lengt > 0 ? (
        <SingleHolidays {...vacanza.data[selected]} />
      ) : (
        <h4>Nessuna vacanza</h4>
      )} */}
      <SingleHolidays {...vacanza.data[selected]} next={showNext} perv={showPerv}/>
    </div>
  } else {
    return <h2>Loading...</h2>;
  }
};

export default Holiday;
