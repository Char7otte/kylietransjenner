import { format } from "date-fns";

import Posts from "../features/posts/components/posts.tsx";

const posts = [
    {
        title: "Poopcap",
        game: "Plants vs Zombies: Replanted",
        date: format(new Date(2014, 1, 11), "yyyy-MM-dd"),
    },
    {
        title: "the power of my femine curiosity",
        game: "Bayonetta",
        date: format(new Date(2015, 12, 21), "yyyy-MM-dd"),
    },
];

function App() {
    const currentDate = format(new Date(), "do MMMM yyyy");

    return (
        <>
            <main>
                <section>
                    <h1 className={`text-center`}>Shar's Game Diary</h1>
                    <p>Hello! It is {currentDate}.</p>
                </section>
                <section>
                    <Posts posts={posts} />
                </section>
            </main>
        </>
    );
}

export default App;
