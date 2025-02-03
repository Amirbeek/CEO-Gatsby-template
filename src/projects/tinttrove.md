---
title: Image Color Classifier  Inspired by Figma’s Image Color Picker
stack: Development
slug: tinttrove
date: 2021-01-01T00:00:00+00:00
thumb: ../images/main/Tint.png
featuredImg: ../images/main/Tint.png
---
### Inspiration
As a daily user of Figma, I often leverage its image color picker, which I find not only useful but also beautifully designed. This tool inspired me to develop a similar feature for my own website that adheres to the intuitive and modern design principles seen in Figma.
![Instpiration Image](/tintrove/figma.png)
### Tinthrove Design Approach

In crafting Tinthrove, I scoured numerous templates and visual assets from the [Figma Community](https://www.figma.com/community) for inspiration. My goal was to forge a design that stands out by incorporating vibrant animations and colors. For this purpose, I integrated Tailwind CSS for its utility-first styling and GSAP for smooth animations. The backend development was powered by Flask.

### Creating the Color Classifier
The Color Classifier was engineered using the K-Means clustering algorithm. This tool effectively groups similar colors from images, which simplifies the design process and enhances data visualization by providing a palette of dominant colors based on their **RGB values**.
```javascript
def get_colors(image, number_of_colors):
    reshaped_image = image.reshape(image.shape[0] * image.shape[1], 3)
    clf = KMeans(n_clusters=number_of_colors)
    labels = clf.fit_predict(reshaped_image)
    counts = Counter(labels)
    center_colors = clf.cluster_centers_
    ordered_colors = [center_colors[i] for i in counts.keys()]
    return ordered_colors
```
![image](/tintrove/my_KmeanAlgo.png)

### Deployment and Challenges
After rigorous testing and further refining the design, I deployed my application on Heroku using GitHub. This setup enables continuous integration, meaning [Heroku](https://heroku.com/) automatically fetches and deploys new builds upon code changes. Initially, I attempted to deploy on Vercel; however, Vercel's 250 MB limit proved restrictive, leading to an unsuccessful first attempt. Consequently, I decided to switch to Heroku, leveraging the benefits offered through the GitHub Student Pack, which provides additional resources for deployment.
![tint.gif](/tintrove/tint.gif)

You can view the source code here: [Source Code](https://github.com/Amirbeek/TintTrove), and a live demo is available here: [Live Demo](https://tinttrove-66532836a19d.herokuapp.com/).

