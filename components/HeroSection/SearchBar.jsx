import Image from "next/image";
function SearchBar() {
    return (
        <>
            <div className="Search">
                <div className="Search-filter">
                    <div className="Search-filter__item">
                        <p className="txMain upc">Category</p>
                        <div>
                            Select a category <Image src="/icons/arrow-dropdown.svg" alt="" width={10} height={5} />
                        </div>
                    </div>
                    <div className="Search-filter__item">
                        <p className="txMain upc">When</p>
                        <div>
                            Select a category <Image src="/icons/arrow-dropdown.svg" alt="" width={10} height={5} />
                        </div>
                    </div>
                    <div className="Search-filter__item">
                        <p className="txMain upc">Where</p>
                        <div>
                            Select a category <Image src="/icons/arrow-dropdown.svg" alt="" width={10} height={5} />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .Search {
                    background-color: #060070;
                    border-radius: 20px;
                    margin: 0 86px;
                    padding: 30px 40px;
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
