(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8rnM":function(e,a,t){},N58Q:function(e,a,t){"use strict";t.r(a);t("q1tI");var n=t("P4be"),o=t.n(n),s=t("Bl7J"),i=t("tBDR"),r=t("Vn4c"),l=t.n(r),c=t("blpp"),h=t.n(c),u=t("AeFk");a.default=function(e){e.data;return Object(u.a)(s.a,null,Object(u.a)("div",{className:o.a.container},Object(u.a)("h1",null,"CPU/GPU Data Visualization (ongoing project)"),Object(u.a)("body",null,Object(u.a)("a",{href:"https://github.com/trangrei/DataViz-Proj"},Object(u.a)("u",null,"Project GitHub link"))),Object(u.a)("body",null,"Building a PC is all fun and games until we realize there is bottleneck 😎"),Object(u.a)("h2",null,"Solo project"),Object(u.a)("h2",null,"Roles performed:"),Object(u.a)("ul",null,Object(u.a)("li",null,"Frontend engineer"),Object(u.a)("li",null,"Desperate PC builder")),Object(u.a)("h2",null,"Tools used"),Object(u.a)("ul",null,Object(u.a)("li",null,"Python (Selenium, Pandas, Seaborn)"),Object(u.a)("li",null,"Tableau"),Object(u.a)("li",null,"Pen and paper"),Object(u.a)("li",null,"(Incoming) D3.js")),Object(u.a)("h1",null,"Problem statement"),Object(u.a)("body",null,"When we buy or build a PC, there are many CPU-GPU combinations. We can extend our budget and buy the best CPUs and GPUs, but ",Object(u.a)("b",null,"the most expensive CPU-GPU pair does not necessarily mean better performance.")),Object(u.a)("body",null,Object(u.a)("a",{href:"https://www.tomshardware.com/reviews/game-performance-bottleneck-cpu-gpu,5503-11.html"},Object(u.a)("u",null,"Tom's hardware")),' has performed a few tests of different types of CPU pairing with one type of GPU (the test varies by the GPU type we pair the CPUs with). "Balance is the goal here," written Paul Alcorn, the Deputy Managing Editor for Tom\'s Hardware U.S. Different tasks and games will also result in different performances, making it harder for users to make choices that fit their budget and use goals.'),Object(u.a)("body",null,Object(u.a)("i",null,Object(u.a)("b",null,"Fun fact:")," each fall, Intel launches a new processor model in the “TickTock” mechanism: a shrinking in processor’s size or introducing a new processor. That’s a lot information to consume if we don’t keep up with releases!")),Object(u.a)("body",null,"Here comes data visualization. Seeing something in picture is one of the fastest ways to absorb information and make decisions. As someone who recently built her PC, I was excited to learn more about why and how computer parts work together, and how I can leverage this immense amount of data into digestible visualizations for anyone starting out in their PC career."),Object(u.a)("body",null,"This project, therefore, aims to ",Object(u.a)("b",null,"make it easier for a PC novice to decide which CPU-GPU pairings are suitable for their needs, and how much of an upgrade is necessary and worthwhile for their budget.")),Object(u.a)("body",null,"Dr. Yu Wang at Harvard University also did ",Object(u.a)("a",{href:"https://yuemmawang.github.io/publications/wang-taco2019.pdf"},Object(u.a)("u",null,"research"))," on how to predict computers' future performances with future parts based on the parts already manufactured and workloads already measured. My project, however, is only to visualize the CPU-GPU pairings and the gaming performance scores and let the users see the extensive list of choices."),Object(u.a)("h1",null,"Potential audience"),Object(u.a)("body",null,"My audience are potential PC buyers/PC builders who want to make choices on CPUs and GPUs that best suit their needs."),Object(u.a)("body",null,"The ",Object(u.a)("b",null,"audience")," is assumed to be someone ",Object(u.a)("b",null,"who has little to no experience with computers")," and would rather not having to read hours of technical articles back and forth to compare between computer parts."),Object(u.a)("h1",null,"Approach"),Object(u.a)("body",null,"My goal at first is to find a public dataset with users' computer performances measured by workloads and computer resources (RAM, CPU) utilized. However, most of the datasets are from public computers or supercomputers used for heavy task loads."),Object(u.a)("body",null,"I want to find ",Object(u.a)("b",null,"datasets that look at users' individual use, as each user's computer parts and workloads are different from another's"),". Having case-by-case data in visualization form will give potential users more information to choose from and factors to consider. Users need to consider the type of workload for their PCs and also budget factor while choosing computer parts."),Object(u.a)("h2",null,"Data"),Object(u.a)("body",null,"I used data from ",Object(u.a)("a",{href:"https://userbenchmark.com"},Object(u.a)("u",null,"UserBenchmark.com")),", a website that measures PCs' performances using their site's testing tool (I was inspired by Dr. Wang's research which used data from ",Object(u.a)("a",{href:"https://geekbench.com"},Object(u.a)("u",null,"Geekbench.com")),".) An example of such measurement is as follows:"),Object(u.a)(i.a,{fileName:"pc-measure.png",alt:"One user's PC measurements"}),Object(u.a)("div",{class:"tinyText"},"One example of user's performance result, dynamically added to the list of scores measured on userbenchmark.com"),Object(u.a)("body",null,"The ",Object(u.a)("a",{href:"https://docs.google.com/spreadsheets/d/1iFdH1usGYRanLGSk-mYMK5MuES02Z8Ui35Qt8xHs6SM/edit?usp=sharing"},Object(u.a)("u",null,"dataset"))," have 1024 observations of users from all around the world, 253 CPU brands, 178 GPU brands, and distinct user IDs."),Object(u.a)("body",null,"The three measurement categories are gaming, desktop, and work station rating. Gaming, well, is gaming. Desktop is for a normal usage of streaming music, editing documents, etc..., and Work Station is heavy workload with video editing, design softwares, etc..."),Object(u.a)("h2",null,"Metrics"),Object(u.a)("body",null,"To narrow down a 1024-row dataset of hundreds of pairings between CPUs and GPUs, we’d focus on the AMD Ryzen CPUs and Nvidia’s GPUs. The reason I chose the Ryzen 5 is because it is a decent CPU with good price to quality ratio."),Object(u.a)("body",null,"The baseline comparison for PC performance is a combination of the NVidia RTX 2060S and the Intel Core i5-9600K. This combination will receive a game rating of approximately 100%. Depending on other PC parts, the scores will vary. "),Object(u.a)(i.a,{fileName:"gaming-base-score.png",alt:"A screenshot of how the PC scores are calculated"}),Object(u.a)("h2",null,"Visualization choices"),Object(u.a)("body",null,"The purpose of the visualization is for users to be able to see different CPU-GPU combinations, thus an interactive visualization would be fitting. A comprehensive plot of different CPU-GPU pairings is also a good strategy."),Object(u.a)("h3",null,"Scatterplot"),Object(u.a)("body",null,"Ah, here comes the scatterplot, the first plot I ever learned to make in my Stats class. However, we don't want to just have a plot of ",Object(u.a)("code",null,"y = ax + b"),", but a plot with two qualitative, categorical variables (CPU names and GPU names) and two quantitative, numeric variables (desktop rating and game rating). We only care about gaming rating as mentioned in the metrics section, but well, the more variables, the more fun we have."),Object(u.a)(i.a,{fileName:"scatterplot.png",alt:"A screen of a desktop app"}),Object(u.a)("div",{class:"tinyText"},"Scatterplot of PC's desktop and gaming rating plotting against CPU and GPU combinations (created in Tableau)"),Object(u.a)("body",null,"An insight we can see here is that there is a gap between a PC's desktop rating and gaming rating, and the more advanced the GPU, the smaller the gap."),Object(u.a)("body",null,"This plot also shows that a newer, higher-priced GPU does not mean a good gaming performance. For example, the Nvidia GTX 1650 and Nvidia GTX 1650 (Super) shows to have better gaming rating than the Nvida GTX 1660."),Object(u.a)("body",null,"Let's take a look at a slightly similar case. We have two GPU, the GTX 1070 and the GTX 1060, measured against the same set of CPUs. Different GPUs show to have varied performance depending on the CPUs they are paired with."),Object(u.a)(i.a,{fileName:"gtx-1060.png",alt:"measurement"}),Object(u.a)("div",{class:"tinyText"},"Tom's Hardware speed measurements of GTX 1060 against different CPUs during Hitman (2016 game)"),Object(u.a)(i.a,{fileName:"gtx-1070.png",alt:"measurement"}),Object(u.a)("div",{class:"tinyText"},"Tom's Hardware speed measurements of GTX 1070 against different CPUs during Hitman (2016 game)"),Object(u.a)("body",null,"With this interactive visualization, users wouldn't have to go through various tech articles and compare performances of different PC builds. Instead, they can just hover over a data point and see the normalized rating of each CPU and GPU combination."),Object(u.a)("img",{src:l.a,alt:"scatter plot of CPU and GPU combos"}),Object(u.a)("div",{class:"tinyText"},"How users would use the data viz to check the scores of CPU-GPU pairings"),Object(u.a)("body",null,Object(u.a)("b",null,"How this plot can be improved: "),"instead of having users scrolling down the plot to see their favorite combo, we can have a search bar that jumps straight to the combination they want to check out."),Object(u.a)("h3",null,"Treemap"),Object(u.a)("body",null,"I also experimented with ",Object(u.a)("a",{href:"https://www.fusioncharts.com/resources/chart-primers/treemap-chart"},Object(u.a)("u",null,"treemaps"))," as they are great for categorical data with one or two numerical variables. They are great when we have space constraints or want to see a big picture of the dataset. Here, it helps us see the CPU-GPU combo trends and scores simultaneously."),Object(u.a)("body",null,"In this treemap, each big square bounded by white space groups the same GPU type with different CPUs (for example, one square is the RTX 3090, and another is the GTX 1050-Ti, and so on...)."),Object(u.a)("body",null,"The darker the blue, the higher the rating (normalized). The bigger the square, the more popular the GPU."),Object(u.a)("body",null,"Through this treemap, we can also see how popular each combination is."),Object(u.a)(i.a,{fileName:"treemap.png",alt:"A screen of a desktop app"}),Object(u.a)("div",{class:"tinyText"},"Treemap plotted in Tableau"),Object(u.a)("body",null,"Similar to the scatterplot above, users can also hover over the treemap and see the PC builds they are interested in."),Object(u.a)("img",{src:h.a,alt:"treemap of PC ratings"}),Object(u.a)("div",{class:"tinyText"},"How users can utilize the treemap to check out a CPU-GPU combo"),Object(u.a)("body",null,Object(u.a)("b",null,"How to improve "),": add annotations (names) on each cube so that the GPU names aren't repeated."),Object(u.a)("h3",null,"Heatmap"),Object(u.a)("body",null,"Finally, the heatmap. This is the only map that I had to code for (besides the process of scraping data), which is why I want to continue this project in D3.js to create nice plots and also practice my coding skills. "),Object(u.a)("body",null,"For this heatmap, I will focus on the Ryzen 5 CPU with both AMD and Nvidia GPUs. This is for demonstration purpose, and the smaller subset will show the result somewhat clearer and easier to grasp."),Object(u.a)(i.a,{fileName:"heatmap.png",alt:"A screen of a desktop app"}),Object(u.a)("div",{class:"tinyText"},"Ryzen 5 CPU and multiple GPUs heatmap (created using Python's Seaborn package)"),Object(u.a)("body",null,"Let me point out some interesting results from this heatmap. For most cases, the numbers make sense (the better and newer CPUs and GPUs, the better the performance), but there are some interesting cases. For example, the Ryzen 5 2600 did kinda better than the Ryzen 5 3600 when used with the Nvidia RTX 3070. These are around the same price at the moment, so the upgrade might not make much sense."),Object(u.a)("body",null,"In other cases, however, even if increasing a CPU or GPU capacity will raise our performance, we would like to know, ",Object(u.a)("b",null,'"by how much?"'),". It is the marginal cost and benefit that we want to inform users of, so they can decide whether to upgrade their CPU/GPU. "),Object(u.a)("h1",null,"Biases - Not all PCs are made equal"),Object(u.a)("body",null,"The biggest bias this project might have is the limited number of cases in each combination (hello, what are the chances of us encountering a user that has the RTX 3090 and a Ryzen 9 among 1000 independent observations?) and the other factors of a PC build."),Object(u.a)("body",null,"In this dataset, I only extracted data for CPUs and GPUs (which play the biggest role in the gaming ratings), but having non-biased, extensive research and consideration for all counfounding variables would be necessary to show the accurate data and best advise our users in making buying decisions."),Object(u.a)("h1",null,"Key Takewaways"),Object(u.a)("ul",null,Object(u.a)("li",null,"Combinations of computer parts are not straightforward (newer and more expensive model combinations are not necessarily better)"),Object(u.a)("li",null,"Research by Dr. Yu Emma Wang at Harvard University shows that workload also matters. And yes, workloads, by all means, matter."),Object(u.a)("li",null,"PC performances are based on workload, CPU and GPU specs, bottleneck, and other factors (SSD 5%, RAM 7%, etc…). Having a non-biased and clear measuring methods will make it transparent for users as in how these metrics is used."),Object(u.a)("li",null,"Communication matters! Since my goal is to inform users who are new to building computers of the marginal cost and benefit without having to rack their brains reading many tech articles, I want to be mindful of my words and sentences to make it as comprehensible as possible. Afterall, buidling PCs is an enjoyable (though a bit stressful, to me, at least) process that I hope anyone could enjoy.")),Object(u.a)("h1",null,"Future works"),Object(u.a)("body",null,"More work needs to be done to increase the usability of the visualizations, including: "),Object(u.a)("ul",null,Object(u.a)("li",null,"Creating interactive visualizations that utilize the whole PC build dataset. Users can search for a brand name or a performance score and see the builds available."),Object(u.a)("li",null,"Concatenating pricing data from computer manufacturers and visualize the marginal cost to upgrade between computer parts. This will help users to make better choices based on their budget."),Object(u.a)("li",null,"Using public data from PC manufacturer to inform users of the product's tech specs.")),Object(u.a)("br",null),Object(u.a)("body",null,"Too many work, too little time! As I finished writing this case study, I'm going back to working on this project immediately :). Stay tuned!")))}},P4be:function(e,a,t){e.exports={container:"dataviz-module--container--1bIa-",icon:"dataviz-module--icon--2bi4o"}},Vn4c:function(e,a,t){e.exports=t.p+"static/scatterplot-9c65ce30da347992ae601ba075a05d9e.gif"},blpp:function(e,a,t){e.exports=t.p+"static/treemap-07fd36c9e579cda09a77a0b6fbb86507.gif"},tBDR:function(e,a,t){"use strict";t("q1tI");var n=t("Wbzz"),o=t("9eSz"),s=t.n(o),i=(t("8rnM"),t("AeFk"));a.a=function(e){var a=e.fileName,t=e.alt,o=e.style,r=Object(n.useStaticQuery)("3955117497").allImageSharp.nodes.find((function(e){return e.fluid.originalName===a})).fluid;return Object(i.a)("figure",null,Object(i.a)(s.a,{fluid:r,alt:t,style:o}))}}}]);
//# sourceMappingURL=component---src-pages-dataviz-js-fef308eab1a6f9688bf4.js.map