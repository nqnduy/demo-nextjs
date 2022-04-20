import NextPrev from "../NextPrev/index";
import TextTitle from "../TextTitle/index";
import MemberCard from "./MemberCard";
export default function OurTeam({ type }) {
    return (
        <>
            <div className="OurTeam">
                <div className="flexSB">
                    <div className="flex" style={{ width: "60%", marginLeft: "-3%" }}>
                        <MemberCard image="/images/about1.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about2.png" name="Lam Kha Nhu" role="Marketing" />
                        <MemberCard image="/images/about3.png" name="Tony Pham" role="Founder & CEO" />
                    </div>
                    <div className="textWrap PRMain">
                        <TextTitle small_text={"Our teams"} big_text={"Many famous celebrities"} />
                        <p className="txMain purple normal" style={{ marginBottom: 60, width: "80%", textAlign: "justify" }}>
                            Nifty team is a diverse network of consultants and industry professionals with a global mindset & a collaborative culture. We work
                            to understand your issues
                        </p>
                        <NextPrev />
                    </div>
                </div>
                <style jsx global>{`
                    .OurTeam {
                        .textWrap {
                            width: 40%;
                        }
                        .MemberCard {
                            margin-right: 20px;
                            transition: ease-out 0.4s;
                            &:first-child {
                                margin-top: 100px;
                                opacity: 0.5;
                            }
                            &:nth-child(2) {
                                margin-top: 50px;
                                opacity: 0.7;
                            }
                            &:hover {
                                cursor: pointer;
                                opacity: 1;
                                transition: ease-out 0.4s;
                            }
                        }
                    }
                `}</style>
            </div>
        </>
    );
}
