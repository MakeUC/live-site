import { useEffect, useState } from "react";

const apiUrl = `https://makeuc-registration.herokuapp.com/stats?service=web`;

const getStat = async text => {
  const res = await fetch(apiUrl, {
    method: `POST`,
    body: JSON.stringify({ text }),
    headers: {
      'Content-Type': `application/json`
    }
  });
  return res.json();
};

export default function() {
  const [ stats, setStats ] = useState({ Registrants: 0, Universities: 0, Countries: 0, Majors: 0 });

  useEffect(() => {
    (async function() {
      const [ Registrants, Universities, Countries, Majors ] = await Promise.all([
        getStat(`number`),
        getStat(`schools`),
        getStat(`countries`),
        getStat(`majors`)
      ]);

      setStats({ Registrants, Universities, Countries, Majors });
    })()
  }, []);

  return stats;
};