function TextTitle({ small_text, big_text }) {
    return (
        <>
            <div className="TextTitle">
                <h3 className="txMain blue normal upc lspacing-1">{small_text}</h3>
                <h4 className="txMain fz-36 bold">{big_text}</h4>
            </div>
            <style jsx>{`
                h3 {
                    margin-bottom: 10px;
                }
                h4 {
                    margin-bottom: 26px;
                }
            `}</style>
        </>
    );
}

export default TextTitle;
