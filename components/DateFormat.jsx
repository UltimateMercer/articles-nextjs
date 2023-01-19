import { useEffect, useState } from "react";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const DateFormat = ({ date, fulldate = false, fulltimestamp = false }) => {
  // const [formattedDate, setFormattedDate] = useState("");

  const formatDate = (time) => {
    return format(new Date(time), "dd MMM yyyy", {
      locale: ptBR,
    });
  };

  const formatFullDate = (time) => {
    return format(new Date(date), "dd 'de' MMMM 'de' yyyy'", {
      locale: ptBR,
    });
  };

  const formatFullTimeStamp = (time) => {
    return format(new Date(time), "dd 'de' MMMM 'de' yyyy', às' H:mm", {
      locale: ptBR,
    });
  };

  return (
    <>
      <span>
        {/* {formattedDate} */}
        {fulldate && formatFullDate(date)}{" "}
        {fulltimestamp && formatFullTimeStamp(date)}
        {!fulldate && !fulltimestamp && formatDate(date)}
      </span>
    </>
  );
};

export default DateFormat;
