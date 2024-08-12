import { getExternalById } from '@/controller/route-controller';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const userId = req.nextUrl.searchParams.get('userId');
    if (!userId) {
      return NextResponse.json({ message: 'Card ID is required' }, { status: 400 });
    }
    const externalLink = await getExternalById(userId);
    if (!externalLink) {
      return NextResponse.json({ message: 'externalLink not found' }, { status: 404 });
    }
    return NextResponse.json({externalLink : externalLink} , {status : 200});
  } catch (error) {
    console.error('Error fetching externalLink:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
