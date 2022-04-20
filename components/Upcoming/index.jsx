import TextTitle from "../TextTitle";
import GridCard from "../Upcoming/GridCard";
import ListCard from "../Upcoming/ListCard";
function Upcoming({ isList }) {
    return (
        <>
            <div className="Upcoming">
                <div className="container-fluid ">
                    <TextTitle small_text="Discover" big_text="Upcoming shows" />
                </div>
                {isList ? <ListCard /> : <GridCard />}
            </div>
            <style jsx>{`
                .Upcoming {
                    padding-top: 100px;
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
