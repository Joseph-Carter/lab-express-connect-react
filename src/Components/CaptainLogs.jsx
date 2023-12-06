import { useEffect, useState } from "react";
import Log from "./Log";
const API = import.meta.env.VITE_BASE_URL

const CaptainLogs = () => {
    const [logs, setLogs] = useState([]);
  useEffect(()=> {
    fetch(`${API}/logs`)
    .then((response) => response.json())
    .then( logs => setLogs(logs))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="CaptainLogs-list">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default CaptainLogs;
