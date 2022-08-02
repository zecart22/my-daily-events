import { useState, useEffect } from "react";
import { api } from "../../services";

const ReciveEvt = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    api
      .get("/eventos_diarios")
      .then((response) => {
        console.log(response);
        setEventsData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return eventsData;
};

const Events = ReciveEvt();
export default Events;

console.log(Events);
