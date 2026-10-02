// Base API URL
const API_BASE = '/api';

// Check backend health on page load
document.addEventListener('DOMContentLoaded', async () => {
  const statusEl = document.getElementById('backend-status');
  if (!statusEl) return;

  try {
    const response = await axios.get(`${API_BASE}/health`);
    if (response.data && response.data.status === 'healthy') {
      statusEl.className = 'status-badge status-healthy';
      statusEl.textContent = `Online (${response.data.project})`;
    } else {
      statusEl.className = 'status-badge status-error';
      statusEl.textContent = 'Degraded';
    }
  } catch (error) {
    console.error('API Health Check failed:', error);
    statusEl.className = 'status-badge status-error';
    statusEl.textContent = 'Offline (Check Backend)';
  }
});
