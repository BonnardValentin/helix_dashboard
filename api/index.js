// Simple API route for health check
export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    message: 'ShinAI is operational',
    version: process.env.SHINAI_DASHBOARD_VERSION || '1.0.0'
  });
} 