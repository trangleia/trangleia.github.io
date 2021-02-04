import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Image from "../components/image.js"
import styles from "../styles/winged.module.css"
import Layout from "../components/layout"

export default ({data}) => {
	return (
		<Layout>
			<div className={styles.container}>
				<div className={styles.mainContent}>
					<h1>Winged - a leap motion drawing app for users with hand and arm disabilities</h1>
					<h2>Solo project</h2>
					<h2>Roles performed:</h2>
					<ul>
						<li>User researcher</li>
						<li>User interface designer</li>
					</ul>
					<h2>Tools used</h2>
					<ul>
						<li>Figma</li>
						<li>Miro</li>
						<li>Paper prototyping</li>
					</ul>
					<h1><a id="executivesummary"></a>Executive summary</h1>
					<body>Winged aims to provide a minimalistic interface for users with hand and arm impairement to draw with minimal pain and discomfort</body>
					<h1>Problem statement</h1>
					<body>Disabilities have long had negative influence on adults emotionally and physically</body>
					<body>There are a lot of disabled artists out there who want to be able to draw. However, most of them use other parts of their bodies (such as their mouths and legs), which will greatly cause pain and discomfort.</body>
					<body>Based on the concept of art therapy, art is a means for users to feel the freedom to express themselves and create something new. It is especially helpful when users are bound by illnesses and feel less in control of their health. </body>
					<body>
					“Art provides unlimited possibilities for personal, academic, and professional success.” - <a href="https://www.christopherreeve.org/living-with-paralysis/health/staying-active/art-and-creativity"><u>Christopher and Diana Reeve Foundation. </u></a>
					Winged promotes inclusivity in the arts and help artists achieve their goals, either for leisure or serious career pursuit
					</body>
					<Image fileName="disabledartists.png" style={{"width" : "100%"}} alt="Image of disabled artists in the news"/>
					<div className='tinyText'>Disabled Artists in the News</div>
					<div className='tinyText'>Source: <a href="https://mfpausa.com/"/>Mouth and Foot Painting Artists</div>
					<h1>Audience</h1>
					<body>Our audience are <b>those with arm or hand disabilities</b>, unlimited in age or gender</body>
					<body>Our user testing participants, however, are my friends and acquaintances, who have little to no hand and arm disabilities. I'm working on reaching out to more users in the target audience, so if you happen to know someone or have any recommendation in doing so, please do not hesitate to contact me at trang.le@berkeley.edu. I'd really appreciate it!</body>
					<h1>Challenges and How Might We (HMWs)</h1>
					<body>
						There has been <a href="http://chris-creed.com/papers/creed-assets14-tools%20-for-disabled-artists.pdf"><u>research</u></a> on a software that utilizes the <b>leap motion controller </b>to enable users to draw using hand gestures in midair (researched on by Dr. Chris Creed at University of Birmingham), but the interface in the app was too complicated for users to navigate.
					</body>
					<h2>Winged's main challenge is to create an interface that is easy for navigate for different physiological needs.</h2>
					<ol>
						<li>
							HMW help the users navigate the interface with minimal discomfort and muscle pain?
						</li>
						<li>
							HMW create the user interface (UI) as minimalistic as possible?
						</li>
						<li>
							HMW make the options and the icons easier to click?
						</li>
						<li>
							HMW move the canvas to adjust to the users’ hand placement?
						</li>
						<li>
							HMW create independence for the users when they use our app?
						</li>
						<li>
							HMW help users boost their creativity, and more importantly, their self-esteem?
						</li>
					</ol>

					<body>
						In this case study, I will propose a solution for HMWs 1-4, and leave 5) and 6) for further research and future iterations
					</body>
					<h2>Similar to Dr. Creed's research, we utilize the leap motion controller as a tool for users to draw.</h2>
					<Image fileName="leapmotionsdk.png"
						style={{"position" : "relative"}}
						object-fit = "none"
						alt = "The leap motion controller visualization"
						/>
					<div class="tinyText">The leap motion controller</div>
					<div class="tinyText">Source: https://www.ultraleap.com/tracking/</div>
					<h1>Approach</h1>
					<body>Our approach to addressing the HMWs are <b>hand detection</b>, <b>recommending a suitable wheelchair setup,</b> <b>voice command</b>, and <b>a minimalistic design </b> </body>
					<ul>
						<li>Minimalist interface</li>
						<li>Hand gestured detected by the leap motion controller</li>
						<li>Optimized wheelchair setup of the leap motion controller for each user</li>
						<li>Detect users’ hand parts to customize to physiological structures</li>
						<li>Voice command to minimize hand gestures and thus pain</li>
					</ul>
					<h1>Design Process</h1>
					<h2>User Journey</h2>
					<body>The main pain point we detect from the user journey is when users get used to the app. <b>Much physical discomfort in the beginning would turn the users away from using the app</b>, so we want the onboarding phase goes as smooth and accommodating as possible</body>
					<Image fileName="user-journey.png" style={{ width: '100%' }} alt="" />
					<h2>User flow</h2>
					<body>I created a user flow and identify where we can solve the pain point for users. The highlight of the userflow where the solution takes place is the <b>constant feedback loop in which users can go back and forth and adjust the settings suitable to their needs.</b></body>
					<Image fileName="userflow.png"
						alt = "User flow for the app"
					/>
					<div class="tinyText">The highlight of the userflow created in Miro</div>
					<h2>Wireflow</h2>
					<body>To visualize the interface I want to build, I first created a wireflow to imagine how users would adjust settings. But these questions arise: 1) <b>Can we recommend a setting for users during onboarding?</b> and 2) <b>How do we do so for users with various hand disabilities?</b> </body>
					<Image fileName="wireflow.png"
						alt = "User journey for the app"
					/>
					<h2>Arising issues</h2>
					<body>One arising issue I encountered while designing the interface is that <b>different hand physiologies will need different accommodations and setups</b>. When the users' hands or arms are not exactly the same as the hands with the full number of joints and parts, we would have to consider ways to include them in our app as much as possible.</body>
					<Image fileName="handphysiology.png"
						style={{"position" : "relative"}}
						object-fit = "none"
						alt = "Hand structure of a user vs hand with full joints"
					/>
					<div class="tinyText">One example of user's hand physiology compared to a hand with full joints</div>
					<Image fileName="hand-hierarchy.png"
						style={{"position" : "relative"}}
						object-fit = "none"
						alt = "Hand hierarchy of leap motion tracker"
					/>
					<div class="tinyText">The leap motion hand hierarchy.</div>
					<div class="tinyText">Source: <a href="https://blog.leapmotion.com/getting-started-leap-motion-sdk/">Getting started with the leap motion sdk</a></div>
					<body>Another arising issue is <b>how to perform user testing and design iteration</b>. As our app is interactive in the 3D space, we cannot simply test it as with a clickable prototype. It is hard for users to imagine how they would interact with the app on the 2D space, and spending too much time coding an interface that is way too elaborate and subject to many drastic changes would cost a lot of time. </body>
					<body>Instead of going from wireframe to digital prototyping and then coding, for this app, <b>putting each fidelity level into code</b> will be necessary to provide <b>the most genuine user testing experience.</b></body>
					<Image fileName="interactivity.png" style={{ width: '100%' }} alt="Design iteration" />
					<h1>Solutions</h1>
					<h2>1. Recommend the best device setup for users based on their hand structures</h2>
					<body>My proposed solution is that we should have the <b>onboarding screens to detect users' hand joints and parts that are ready for drawing.</b></body>
					<body>By having the users completing some <b>simple exercises</b> (clicking on a button, moving their hands to a designated location), we might be able to detect which parts of their hands users are comfortable with using and moving.</body>
					<Image fileName="detecthand.png" alt="Detect hand physiology"/>
					<h2>2. Give users freedom to setup the interface at their convenience</h2>
					<body>While doing user testing, I realized that having the buttons placed on users' fingertips are not at all optimal. At first, I only took in consideration users who have paralyzed arms but can still move their fingers. However, this approach, even with this small subset of users, is confusing in and of itself. It was not clear to the participants I tested with that the buttons are on the tip of their fingers. Moreover, this design has a huge flaw, in which it <b>does not provide inclusivity for various disabilities.</b></body>
					<Image fileName="button-placement.png" style={{width: '100%'}} alt="Button placement"/>
					<body>Many user testing participants commented that it would be easier for them to just use whichever hand or finger they want to click on buttons and navigate the interface. We <b>give users freedom to customize the interface and interact with the app at their convenience</b>, and still have our recommendation to support them.</body>
					<h2>3. Voice commands for users to set up devices and choose drawing options</h2>
					<body>When users start out using the app, we would not know about users' disabilities and how their hands or arms or structured. To limit this initial bulkiness for users, we could guide them through <b>using voice commands during setup</b> to let us know about their disabilities and choosing a suitable device.</body>
					<Image fileName="setup-device.png" style={{width: "100%"}} alt="device setup screen"/>
					<body>Not just that, <b>voice command also aides users to make drawing options without having to physically click on buttons.</b> They can tell us which color they want to pick or which brush they would use, not dissimilar to Siri's usage.</body>
					<Image fileName="voice-command.png" style={{width: "100%"}} alt="drawing with voice command"/>
					<h2>4. Suitable wheelchair setup to minimize users' movements</h2>
					<body>I asked one user (who has no disabilities) that "how would you go about using a drawing app if your right arm is injured by rockclimbing?" (she loves rockclimbing and is righthanded). "I would use my left arm to move the paper around and my right arm to draw, so my injured arm does not have to move around as much," she answered.</body>
					<body>This answer inspired the fourth solution, which is <b>setting up the leap motion controller on a wheelchair at a suitable location</b>.</body>
					<body>While playing around with the leap motion controller, I realized that as I moved my controller around with one hand and keep the detected hand still, the detected hand would be moving around on the screen, reflecting the "moving the paper around" idea that our participant gave.</body>
					<body>Thus, <b>having a wheelchair with the controller attached and moveable at the click of a button</b> would give users a lot of freedom to make use of the canvas despite limited arm range.</body>
					<body>Users with <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/arthrogryposis"><u>arthrogryposis</u></a>, for example, would have limited arm range movement. <b>"Moving around the canvas"</b> is a potential solution for this group of users, and I believe it can benefit users with other conditions and illnesses.</body>
					<Image fileName="wheelchair.png" style={{width: '100%'}} alt="wheelchair setup"/>
					<h1>Summary - Takeaways</h1>
					<body>One of the main challenges of the app is to <b>adapt to different disabilities</b> to increase inclusivity towards our users.</body>
					<body>Some of the key solutions include: </body>
					<ul>
						<li>Experimenting with different different device placements on wheelchair to better suit users' handicap</li>
						<li>Detect users' hand joints and bone structures to recommend a setting for them</li>
						<li>Using voice command to minimize hand interactions and smoothen the onboarding process</li>
						<li>Let users customize button locations in whichever way that is convenient for them</li>
					</ul>
					<h1>Further work</h1>
					<body>I have identified the following tasks to be done to move this project forward:</body>
					<ul>
						<li>
						As some users suggested, <b>learning from existing assistive technologies</b> and gesture settings of different drawing apps will inform us of the settings/interactions that users have been acquainted with
						</li>
						<li>Conduct more <b>research into different disabilities</b> and physiological structures of those with hand impairement</li>
					</ul>
				</div>
			</div>
		</Layout>
	)
}