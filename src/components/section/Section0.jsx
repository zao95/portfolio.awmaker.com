import Index from "./module/Index"
import Title from "./section0/Title"
import Contents from "./section0/Contents"

import "../../styles/section/section0/Index.sass"
import "../../styles/section/section0/Title.sass"
import "../../styles/section/section0/Contents.sass"

const Section0 = () => {
	return (
        <>
            <Index sectionNumber="0" indexNumber="00" title="PROFILE" />
            <Title />
            <Contents />
        </>
    )
}

export default Section0