import { BACKEND_URL } from '@/shared/config';

export default async function getCityList<ResponseT>(
  query: string
): Promise<Awaited<ResponseT>> {
  const response = await fetch(`${BACKEND_URL}${query}`);
  return await response.json();
}
