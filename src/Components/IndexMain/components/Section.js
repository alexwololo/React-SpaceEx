import React from "react";

// destructure but could also do props.pos - see udemy
function Section({ value, pos }) {
    return (
        <section
            style={{
                backgroundImage: value.bg,
            }}
        >
            <div className="flex-text-container">
                <div className={pos ? "text-item-right" : "text-item-left"}>
                    {pos ? (
                        <h2>
                            <span className="txt-4">{value.inner}</span>
                            {value.outer}
                        </h2>
                    ) : (
                        <h2>
                            {value.outer}
                            <span className="txt-4">{value.inner}</span>
                        </h2>
                    )}
                    <h2>{value.heading}</h2>
                </div>
            </div>
        </section>
    );
}

export default Section;
