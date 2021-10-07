# Contribution Guidelines

1. Fork this repository.
2. Clone the forked project with Git in your preferred directory.


#### If you don't have git on your machine, [install it](https://help.github.com/articles/set-up-git/).

## Fork this repository
Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository
Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone https://github.com/<your-username>/MaskDetectionApp.git
```


## Create a branch

Now create a branch using the `git checkout` command:

```
git checkout -b your-new-branch-name
```


## Make necessary changes and commit those changes
If you go to the project directory and execute the command `git status`, you'll see there are changes.


Add those changes to the branch you just created using the `git add` command:

```
git add .
```

Now commit those changes using the `git commit` command:
```
git commit -m "<message>"
```


## Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin <add-your-branch-name>
```

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

Now submit the pull request.

Soon your branch will be merging  with all your changes into the master branch of this project. You will get a notification email once the changes have been merged.



*Congrats! You just completed the standard fork -> clone -> edit -> pull request workflow that you'll encounter often as a contributor!✨*
