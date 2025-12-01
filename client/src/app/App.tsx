import { format } from "date-fns";

import Posts from "../features/posts/components/posts.tsx";

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
                    <Posts />
                </section>
            </main>
        </>
    );
}

export default App;
