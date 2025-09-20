import React from "react";
import { useNavigate, type NavigateFunction, type Navigation } from "react-router";

interface Button {
    content: string;
    routerRef: string;
};

interface ExpectedProps {
    title: string;
    description: string;
    buttons: Button[];
};

export default function Jumbotron({ title, description, buttons }: ExpectedProps) {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="p-5 m-4 bg-body-tertiary rounded-4">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{title ?? "Insert title"}</h1>
                    <p className="cold-md-8 fs-4">
                        {description ?? "Insert description"}
                    </p>

                    {
                        // was going to expand, but i don't intend for a jumbotron to have more than two buttons
                        buttons != null && buttons.length == 2
                            ? <>
                                <button className="btn btn-primary btn-lg me-4" type="button" onClick={() => navigate(buttons[0].routerRef)}>{buttons[0].content}</button>
                                <button className="btn btn-secondary btn-lg" type="button" onClick={() => navigate(buttons[1].routerRef)}>{buttons[1].content}</button>
                            </>
                            : buttons != null && buttons.length == 1 ? <button className="btn btn-primary btn-lg me-4" type="button" onClick={() => navigate(buttons[0].routerRef)}>{buttons[0].content}</button>
                                : <></>
                    }
                </div>
            </div>
        </>
    );
}