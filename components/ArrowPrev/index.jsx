const ArrowPrev = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={"slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button">
        <img src="/images/icons/arrow-prev.svg" alt="" />
    </button>
);

export default ArrowPrev;
