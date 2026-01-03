import Post from "../components/Post";

function Blog() {
    const posts = Array(3).fill({
        tags: ["Google", "Trending", "New"],
        title: "Loudest à la Madison #1 (L'integral)",
        descrip:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comment: "10 Comments",
    });

    return (
        <section className=" container flex flex-col gap-12 md:gap-16 py-16 md:py-20">

            <div className="flex flex-col items-center gap-4 text-center">
                <h4 className="text-h4 text-primary">
                    Practice Advice
                </h4>

                <h2 className="text-h2 text-primary">
                    Featured Posts
                </h2>

                <p className="max-w-xl text-p text-secondary">
                    Problems trying to resolve the conflict between the two major realms of
                    Classical physics: Newtonian mechanics
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>

        </section>
    );
}

export default Blog;
