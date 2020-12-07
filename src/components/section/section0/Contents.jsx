import React from 'react'
import resumeDocxKr from "../../../assets/files/resume_kr.docx"
import resumeHwpKr from "../../../assets/files/resume_kr.hwp"
import resumePdfKr from "../../../assets/files/resume_kr.pdf"
import coverLetterDocxKr from "../../../assets/files/cover_letter_kr.docx"
import coverLetterHwpKr from "../../../assets/files/cover_letter_kr.hwp"
import coverLetterPdfKr from "../../../assets/files/cover_letter_kr.pdf"
import resumeDocxEn from "../../../assets/files/resume_en.docx"
import resumeHwpEn from "../../../assets/files/resume_en.hwp"
import resumePdfEn from "../../../assets/files/resume_en.pdf"
import coverLetterDocxEn from "../../../assets/files/cover_letter_en.docx"
import coverLetterHwpEn from "../../../assets/files/cover_letter_en.hwp"
import coverLetterPdfEn from "../../../assets/files/cover_letter_en.pdf"

const Contents = () => {
	return (
		<>
            <div id="section0Contents" className="contentsPageWrap pageWrap">
				<div className="contentsWrap">
					<p className="title condensed">
						this is description about me
					</p>
					<div className="mainWrap">
						<div className="leftWrap">
							<div className="contents">
								I am a student majoring in design who is dreaming 
								of becoming a front-end developer. Even though I 
								started later than other students, I wrote a paper 
								on deep learning in two years and won many awards 
								in the contest for my excellent development skills.
							</div>
						</div>
						<div className="lineVertical line" />
						<div className="rightWrap">
							<div className="contents">
								I took a development related major with multiple 
								majors, prepared for the information processing 
								technician test, and solidified the basics of 
								development. I'm also confident in design, so I 
								would appreciate it if you could take your time to 
								appreciate the projects below!
							</div>
						</div>
					</div>
					<div className="mainWrap subWrap">
						<div className="leftWrap">
							<div className="filesWrap">
								<p className="subTitle condensed">
									Résumé
								</p>
								<p className="explanation">
									Download my resume according to 
									your word software program.
								</p>
								<div className="files">
									<a href={resumeDocxKr} tarbet="_blank" download>
										<div className="docxKr file" />
									</a>
									<a href={resumeHwpKr} tarbet="_blank" download>
										<div className="hwpKr file" />
									</a>
									<a href={resumePdfKr} tarbet="_blank" download>
										<div className="pdfKr file" />
									</a>
								</div>
								<div className="files">
									<a href={resumeDocxEn} tarbet="_blank" download>
										<div className="docxEn file" />
									</a>
									<a href={resumeHwpEn} tarbet="_blank" download>
										<div className="hwpEn file" />
									</a>
									<a href={resumePdfEn} tarbet="_blank" download>
										<div className="pdfEn file" />
									</a>
								</div>
							</div>
						</div>
						<div className="lineVertical line" />
						<div className="rightWrap">
							<div className="filesWrap">
								<p className="subTitle condensed">
									COVER LETTER
								</p>
								<p className="explanation">
									Download my cover letter according 
									to your word software program.
								</p>
								<div className="files">
									<a href={coverLetterDocxKr} tarbet="_blank" download>
										<div className="docxKr file" />
									</a>
									<a href={coverLetterHwpKr} tarbet="_blank" download>
										<div className="hwpKr file" />
									</a>
									<a href={coverLetterPdfKr} tarbet="_blank" download>
										<div className="pdfKr file" />
									</a>
								</div>
								<div className="files">
									<a href={coverLetterDocxEn} tarbet="_blank" download>
										<div className="docxEn file" />
									</a>
									<a href={coverLetterHwpEn} tarbet="_blank" download>
										<div className="hwpEn file" />
									</a>
									<a href={coverLetterPdfEn} tarbet="_blank" download>
										<div className="pdfEn file" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="introduceWrap">
						<div className="introduceflex">
							<div className="icon" />
							<p className="subTitle condensed">
								SKILLS
							</p>
							<div className="introduce">
								<p>REACT</p>
								<p>REDUX</p>
								<p>TYPESCRIPT</p>
								<p>SERVERLESS</p>
								<p>MYSQL</p>
								<p>AWS ARCHITECTURE</p>
								<p>&nbsp;</p>
								<p>ADOBE PHOTOSHOP</p>
								<p>ADOBE ILLUSTRATOR</p>
								<p>ADOBE XD</p>
								<p>ADOBE AFTER EFFECT</p>
								<p>3DS MAX</p>
							</div>
						</div>
						<div className="introduceflex">
							<div className="icon" />
							<p className="subTitle condensed">
								HONORS
							</p>
							<div className="introduce">
								<p>"Design and implementation of location</p>
								<p>information servicebased on place</p>
								<p>image deep learning"</p>
								<p>Winning the Excellence Award at the</p>
								<p>Korea IT Service Association's Autumn</p>
								<p>Academic Conference.</p>
								<p>&nbsp;</p>
								<p>Winning the president prize</p>
								<p>at Anyang University's Capstone Contest.</p>
								<p>&nbsp;</p>
								<p>Winning the grand prize</p>
								<p>at Anyang University's Startup Idea Contest.</p>
								<p>&nbsp;</p>
								<p>Winning a number of Excellence Prizes </p>
								<p>at Anyang University's Startup Idea Contest.</p>
							</div>
						</div>
						<div className="introduceflex">
							<div className="icon" />
							<p className="subTitle condensed">
								LANGUAGES
							</p>
							<div className="introduce">
								<p>KOREAN: NATIVE</p>
								<p>JAPANESE: EXPERT / JLPT N2</p>
							</div>
						</div>
						<div className="introduceflex">
							<div className="icon" />
							<p className="subTitle condensed">
								CERTIFICATES
							</p>
							<div className="introduce">
								<p>Engineer Information Processing</p>
								<p>Craftsman Computer Graphics Operation</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contents