import React from "react";
import Jumbotron from "../components/Jumbotron";

export default function RegisterPage() {
    return (
        <>
            <div className="container py-4">
                <Jumbotron title="Description page" description="Description!!" buttons={[{ content: "hello!" }, { content: "goodbye!" }]} />
            </div>
        </>
    );
}