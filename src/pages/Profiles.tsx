import React from "react";
import Jumbotron from "../components/Jumbotron";

export default function ProfilesPage() {
    return (
        <>
            <div className="container py-4">
                <Jumbotron title="Profiles page" description="Description!!" buttons={[{ content: "hello!" }, { content: "goodbye!" }]} />
            </div>
        </>
    );
}