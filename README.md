# MaskDetectionApp


![maskdetection](https://user-images.githubusercontent.com/55938346/115107392-406a2980-9f88-11eb-9e54-cd86f5ee96bd.PNG)

                                                Screnshort of web application 

This project is all about detecting mask on persons face whether he/she is wearing mask or not. As Coronavirus pandemic has hit our livelihood mask has become one of the important thing in our lives. It helps protect us from the viruses which are transmitted through air. As government has strictly said that everyone has to wear respected mask everywhere they go, yet so many peoples aren't wearing masks properly. So for this situation we have created a mask detection app which will detect if the person is wearing mask or not. 

Live website - https://maskdetectionapp.biz/

Demo video - https://www.youtube.com/watch?v=m5sHA1sG9zA

__Topic we choosed from the 17 sustainable goals:-__

We choosed " Good Health & Wellbeing " as a theme for our project and created a mask detection web app.As Coronavirus pandemic has hit our livelihood mask has become one of the important thing in our lives. It helps protect us from the viruses which are transmitted through air. As government has strictly said that everyone has to wear respected mask everywhere they go, yet so many peoples aren't wearing masks properly. So for this situation we have created a mask detection app which will detect if the person is wearing mask or not. 

# Technologies used-

```
1.FRONTEND     HTML,CSS
2.BACKEND Javascript,FIREBASE
3.MasDETECTION Model  TENSORFLOW.JS
4.UI/UX     FIGMA 
```

# Process of Creating 

For creating the prototype(UI) of a our web app we used Figma which was our overall  first step. After that we created our frontend of the web app using HTML and CSS. After that we hade to create a  login screen and for that we  used firebase auth which  is one of the best auth provider present in the market and also a google platform so we preferred it .After that for our real interface for checking of the mask we used Tensorflow.js. Tensorflow.js is machine learning framework which brings machine learning model to your web app and it is also a google platform so we preferred to use it as well. For creating the mask detection model  we have created dataset of people not wearing and of people wearing the mask. When the user clicks on start button then the detection starts and our tensorflow functions are called and if the person is wearing masks there will be a message in green container like "wearing mask 100%" and if the person is not wearing mask then there will be message like "not wearing mask 100%". After we have add a logout button as well on the same screen so that person using it can log out from the session.For logout firebase auth functions are called.For  deploying our web app used Firebase.

# Challenges Faced 

This project was filled with so many challenges one was the styling the machine learning model which we created with tensorflow.js and combining it with our frontend.So for that we researched on google and youtube and yeah we were able to resolve the issue thanks to our team members for having such a great team spirit we constantly worked on the issue and yeah we resolve it.


## Tech Stacks being used in our project

1. Frontend: HTML, CSS.
2. Backend: JavaScript, Firebase
3. MasDETECTION Model: TensorFlow.js
4. UI/UX: Figma

## How to contribute

1. Fork the project
2. Make any changes in your forked repo
3. On this repo, click `Pull Requests` and raise a `Pull Request` selecting your fork on the right drop down


## How to clone repo and make changes locally

```
  click on the clone button (green in colour). This gives you a copy of the project. Its now yours to play around with
```

- Using git on your local machine. Do this to download the forked copy of this repo to your computer

```
  git clone https://github.com/ghulamyazdani/MaskDetectionApp.git
```

- switch to the cloned folder. This can be done with Gitbash or the integrated terminal in the VSCode editor

```
  cd Maskdetectionapp
```

- Make a new branch. Your name would make a good branch because it's unique

```
  git checkout -b <name of new branch>
```

- Make Required changes using the Tec-Stacks mentioned above

- Stage your changes

```
  git add <added/modified file name>
```

or

```
  git add .
```

- Commit the changes

```
  git commit -m "Add appropriate Message>"
```

- Check the status of your repository

```
  git status
```

- Pushing your repository to github

```
  git push origin <name of your branch>
```

or

```
  git branch -M main
  git push -u origin main
  git push origin main --force
```

- Navigate to your fork, on the top of the files section you'll notice a new section containing, a contribute button!
- Click on the contribute button, it will open a drop down, click the pull request button on the drop down
  Note: A pull request allows your changes to be merged with the original project.

- Wait for your changes to be merged

Congrats! You successfully made a contribution in our project!
