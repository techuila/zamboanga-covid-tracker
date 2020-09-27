import axios from '@/plugins/axios'

export default async () => {
  // Execute all api calls (in parallel) and wait all their response (Optimized)
  const [
    { data: patients },
    { data: geojson },
    { data: logs }
  ] = await Promise.all([
    axios.get('/api/patients'),
    axios.get('/assets/geojson.json'),
    axios.get('/api/logs')
  ])

  return {
    patients,
    geojson,
    logs
  }
}
