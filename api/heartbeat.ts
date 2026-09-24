import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Client } from 'pg'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const expected = `Bearer ${process.env.CRON_SECRET}`
  if (req.headers.authorization !== expected) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    return res.status(500).json({ error: 'DATABASE_URL is not set' })
  }

  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } })

  try {
    await client.connect()
    await client.query('SELECT private.heartbeat()')
    return res.status(200).json({ ok: true, at: new Date().toISOString() })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return res.status(500).json({ error: message })
  } finally {
    await client.end()
  }
}
