import { Link } from "react-router-dom";

function CaptainLog({ log, index }) {
  return (
    <tr className="captainLogs-individual">
      <td>
        {log.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td style={{ cursor: "alias" }}>
        <a href={log.url} target="_blank" rel="noreferrer">
          {log.name}
        </a>
      </td>
      <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default CaptainLog;