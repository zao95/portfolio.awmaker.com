import Index from "./module/Index"
import Title from "./section0/Title"
import Contents from "./section0/Contents"

import "../../styles/section/Section0.sass"

const Section0 = () => {
	return (
        <>
            <Index sectionNumber="0" indexNumber="01" title="PROFILE" />
            <Title />
            <Contents />
        </>
    )
}

export default Section0