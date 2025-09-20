import React from "react";
import Jumbotron from "../components/Jumbotron";

export default function LoginPage() {
    return (
        <>
            <div className="container py-4">
                <Jumbotron title="Login page" description="Description!!" buttons={[{ content: "hello!" }, { content: "goodbye!" }]} />
            </div>
        </>
    );
}