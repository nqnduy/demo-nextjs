import Image from "next/image";
import Button from "../Button";
function SearchBar() {
    return (
        <>
            <div className="Search">
                <div className="Search-filter">
                    <div className="Search-filter__item">
                        <p className="txMain upc">Category</p>
                        <div className="txMain normal purple">
                            Select a category <Image src="/images/icons/arrow-dropdown.svg" alt="" width={10} height={5} />
                        </div>
                    </div>
                    <div className="Search-filter__item">
                        <p className="txMain upc">When</p>
                        <div className="txMain normal purple">
                            Select a category <Image src="/images/icons/arrow-dropdown.svg" alt="" width={10} height={5} />
                        </div>
                    </div>
                    <div className="Search-filter__item">
                        <p className="txMain upc">Where</p>
                        <div className="txMain normal purple">
                            Select a category <Image src="/images/icons/arrow-dropdown.svg" alt="" width={10} height={5} />
                        </div>
                    </div>
                </div>
                <Button>Search now</Button>
            </div>
            <style jsx>{`
                .Search {
                    background-color: #060070;
                    border-radius: 20px;
                    margin: 0 86px;
                    padding: 30px 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    z-index: 10;
                    margin-top: -55px;
                    box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                    &-filter {
                        display: flex;
                        align-items: center;
                        gap: 150px;
                        &__item {
                            color: #b8b7d0;
                            p {
                                margin-bottom: 5px;
                                font-family: fm-m;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default SearchBar;
