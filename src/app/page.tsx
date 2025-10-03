import Link from 'next/link';

export default function Home() {
    const model = createLandingPageModel();

    return (
        <main className="text-xl">
            <p data-test="work-interval">{model.workInterval}</p>
            <p data-test="timestamp"></p>
            <p>Welcome!</p>

            <Link href="">See random riddle</Link>
        </main>
    );
}
