import { getUserByName } from '@/controller/user-controller';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const cardId = req.nextUrl.searchParams.get('cardId');
    if (!cardId) {
      return NextResponse.json({ message: 'Card ID is required' }, { status: 400 });
    }
    const user = await getUserByName(cardId);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({user : user} , {status : 200});
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
