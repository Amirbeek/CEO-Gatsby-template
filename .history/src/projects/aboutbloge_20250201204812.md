---
title: Discovering Gatsby.js. How and why this blog was built.
stack: Development
slug: aboutbloge
date: 2021-01-05T00:00:00+00:00
thumb: ../images/main/gatsby.jpg
featuredImg: ../images/main/gatsby.jpg
---

### Why would I need a blog?

The idea of building my own website wasn’t something that came out of the blue. It’s been on my mind for a couple of years now, gradually taking shape as I thought more about what I truly needed. One of the main reasons for this decision is my relationship with language. While Uzbek is my native language, I’ve always found expressing complex thoughts in English to be more natural for me. However, it’s not without challenges—especially when it comes to speaking. I’ve worked hard to improve my English, and although I’ve made significant progress, it’s still not where I want it to be. On the other hand, I’ve realized that coding languages are where I can truly shine. I feel more comfortable expressing myself through code than through spoken words.

That’s where the idea of a website comes in. A personal website would allow me to showcase my skills, projects, and experiences in a way that feels authentic and doesn’t rely on how well I can speak or explain things verbally. It’s also a space where I can focus on what matters most: sharing my work, growing as a developer, and giving people a glimpse of what I can do.


I’ve thought about using social media platforms like Instagram or Twitter for this purpose, but they’ve never felt right for me. Social media often feels distracting and, at times, toxic. It’s easy to get caught up in the endless scrolling, and I’ve realized I’d rather spend my time building something meaningful than chasing likes or views. A website, on the other hand, is independent—it’s my space to design, refine, and perfect. It’s also a great way to stand out when applying for jobs or connecting with companies.


### How it was built?
The initial plan was to build a typical MERN stack application. I proceeded coding with React until I stumbled upon [Gatsby.js](http://url.com). I remember a friend of mine showed me what Gatsby.js is, but I never took the opportunity to learn it. From the first glance, Gatsby.js looked like a very promising framework that could possibly be popular in the future. It was offering better efficiency by pre-building static pages out of your React application. Plus, the process of converting your React application into Gatsby seemed to be very smooth and easy with minimal structure alteration.

Once I was familiar with Gatsby's documentation, I have started building my blog on top of an existing template that they were offering on their website. You can actually try it yourself by running these scripts below:

`npm install --save gatsby
gatsby new gatsby-starter-delog https://github.com/W3Layouts/gatsby-starter-delog`

Lorem ninja ipsum dolor sit amet, **consectetuer** adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.



### Design Improvements

The default template was looking pretty good, however, it was plain. I especially did not like the typography spacing: margins between different text sizes were the same, which was kind of odd for a text-rich website. Instead, I used 24px spacing baseline that I successfully tested on a website I did for a start-up this summer. The idea is pretty simple: spacing increases incrementally depending on the element hierarchy, giving my text a consistent look and better readability.

`
--baseline: 24px;
--space-sm: calc(var(--baseline) / 2);
--space-md: var(--baseline);
--space-lg: calc(var(--baseline) * 2);
--space-xl: calc(var(--baseline) * 3);
`

I also added my own touch to the overall design of the website. I tried to use Material UI React along the way, as I was getting more confident with it. Additionally, I changed the GraphQL schema to include a flair (e.g. development, personal, academic, etc.) of the post for better visual navigation.