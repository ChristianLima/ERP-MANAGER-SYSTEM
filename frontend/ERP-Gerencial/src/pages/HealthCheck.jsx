// src/pages/HealthCheck.jsx
import { useEffect, useState } from 'react';
import { getHealthStatus } from '../services/api';

function HealthCheck() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    getHealthStatus().then(setStatus).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Status do Sistema:</h2>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}

export default HealthCheck;
