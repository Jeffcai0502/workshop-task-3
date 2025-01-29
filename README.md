# workshop-task-3
FA205_Workshop_3
URL to the webpage for this project: [link]()

## Task
- Collect a series of images. Make a p5.js sketch that generates a new collage each time the sketch is run.
- Include manipulations of the images so that they change over time, using filters and/or other kinds of computational interventions.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Overview
- Importing Images
- Include manipulations of the images
- Experiment with collage
- Add manipulations such as filter and tints

##  pixel notes
<img width="1609" alt="截屏2025-01-29 上午9 08 53" src="https://github.com/user-attachments/assets/b396ee95-003a-4f97-8eb0-7ab32328ed26" />
<img width="1609" alt="截屏2025-01-29 上午9 09 28" src="https://github.com/user-attachments/assets/a5f2c1b0-d3f1-44a9-b5aa-b4d0302b31f8" />
<img width="1609" alt="截屏2025-01-29 上午9 10 29" src="https://github.com/user-attachments/assets/1a499cbc-5299-4f2c-b484-841d9af6ba07" />
<img width="1675" alt="截屏2025-01-29 上午9 10 59" src="https://github.com/user-attachments/assets/afe958c2-5fe0-4771-859a-46001d31e89a" />
To find the values of a given pixel on the screen:

(x value + y value * width) * 4
### Create image.

Create folder (images) > Drag & drop/ file manager to import images. > Make variable for the image (let img;) 
- Preload function
``` ruby
  function preload () { img = loadImage('images/image.jpg');
}
```

- Put it in draw function
``` ruby
function draw () {
	background(220);
	image(img,0,0);
}
```
<img width="400" alt="截屏2025-01-29 上午9 21 24" src="https://github.com/user-attachments/assets/5aef03c6-a785-43cb-bb19-7d30ad95af28" />

<img width="686" alt="截屏2025-01-29 上午9 21 45" src="https://github.com/user-attachments/assets/71701138-7a6c-4a41-8442-0be3d966df90" />

### Following example
<img width="1263" alt="截屏2025-01-29 上午9 28 19" src="https://github.com/user-attachments/assets/37a8ac47-9952-460f-846c-d3de51f5bd09" />

<img width="1263" alt="截屏2025-01-29 上午9 27 33" src="https://github.com/user-attachments/assets/40380a11-25c0-47b2-800e-9d0211e684ef" />

  

