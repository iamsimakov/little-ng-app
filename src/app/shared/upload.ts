export interface Upload {
  id: number,
  uuid: string,
  clientId: number,
  createdAt: string,
  event_id: number,
  lastTryAt: string,
  originalname: string,
  path: string,
  size: number,
  status: string,
  tries: number,
  updatedAt: string
}
