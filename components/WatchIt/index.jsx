import NextPrev from "../NextPrev";
import PreviousShowList from "./PreviousShowList";
import TextTitle from "../TextTitle";

function WatchIt() {
    return (
        <div className="PreviousShow">
            <div className="container-fluid flexSB">
                <TextTitle small_text="Watch it again" big_text="Previous shows" />
                <NextPrev />
            </div>
            <PreviousShowList />
        </div>
    );
}

export default WatchIt;
