import React from "react";
import Jumbotron from "../components/Jumbotron";

export default function ForYouPage() {
    return (
        <>
            <div className="container py-4">
                <Jumbotron title="For You page" description="Description!!" buttons={[{ content: "hello!" }, { content: "goodbye!" }]} />
            </div>
        </>
    );
}