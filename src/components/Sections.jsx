import Section0 from "./section/Section0"
import Section1 from "./section/Section1"
import Section2 from "./section/Section2"
import Section3 from "./section/Section3"
import Section4 from "./section/Section4"
import Section5 from "./section/Section5"

import "../styles/section/common/Index.sass"
import "../styles/section/common/Title.sass"
import "../styles/section/common/Contents.sass"

const Sections = () => {
	return (
        <>
            <Section0 />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </>
    )
}

export default Sections