import Link from 'next/link';
import { createLandingPageModel } from './LandingPageModelService';
import { useRandomRiddle } from '../domain/riddle/RandomRiddleAdapter';

export default async function Home() {
    const { getData } = await useRandomRiddle();
    const { id: randomRiddleId } = await getData();
    const { interval, timestamp } = createLandingPageModel(new Date());

    return (
        <main className="text-xl">
            <p data-test="work-interval">{interval}</p>
            <p data-test="timestamp">{timestamp}</p>
            <p>Welcome!</p>

            <Link href={`/riddle/${randomRiddleId}`} data-test="entry-control">
                See random riddle
            </Link>
        </main>
    );
}
