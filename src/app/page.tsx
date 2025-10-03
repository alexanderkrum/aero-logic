import Link from 'next/link';
import { createLandingPageModel } from './LandingPageModelService';

export default function Home() {
    const workInterval = createLandingPageModel(new Date());

    return (
        <main className="text-xl">
            <p data-test="work-interval">{workInterval}</p>
            <p data-test="timestamp"></p>
            <p>Welcome!</p>

            <Link href="">See random riddle</Link>
        </main>
    );
}
