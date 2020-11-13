import React from 'react'

const Index = ({sectionNumber, indexNumber, title, subTitle=""}) => {
	return (
		<>
            <div id={`section${sectionNumber}Index`} className="indexPageWrap pageWrap">
				<div className="indexWrap">
                    <div className="mainTitle title">
                        <div className="lineHorizon line" />
                        <p className="condensed">{indexNumber}</p>
                        <div className="lineVertical line" />
                        <p className="condensed">{title}</p>
                    </div>
                    {
                        subTitle ?
                        <div className="subTitle title">
                            <p>{subTitle}</p>
                            <div className="lineVertical line" />
                        </div>
                        :
                        ""
                    }
				</div>
			</div>
		</>
	)
}

export default Index