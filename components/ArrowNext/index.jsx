const ArrowNext = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={"slick-next slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button">
        <img src="/images/icons/arrow-next.svg" alt="" />
    </button>
);

export default ArrowNext;
