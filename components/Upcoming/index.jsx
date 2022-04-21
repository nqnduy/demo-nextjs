import TextTitle from "../TextTitle";
import GridCard from "../Upcoming/GridCard";
import ListCard from "../Upcoming/ListCard";
function Upcoming({ isList = true, haveTitle = true, pTop = 100 }) {
    return (
        <>
            <div className="Upcoming">
                <div className="container-fluid ">{haveTitle && <TextTitle small_text="Discover" big_text="Upcoming shows" />}</div>
                {isList ? <ListCard /> : <GridCard />}
            </div>
            <style jsx>{`
                .Upcoming {
                    position: relative;
                    padding-top: ${pTop}px;
                }
                .container-fluid {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `}</style>
        </>
    );
}

export default Upcoming;
