<h1>Common Git Commands</h1>
<h2>Here's a Quick Reference Guide if Git is Not Being Very Friendly</h2>
You can set up a terminal in Eclipse IDE by clicking on the Blue Monitor Icon in the top toolbar.

<h3>Setup & Configuration</h3>

I didn't have to use these, but that's not to say you wont have to.

```
git config --global user.name "Your Name"       # Set your name
git config --global user.email "you@email.com"  # Set your email
git config --global credential.helper store     # Save credentials locally
```

<h3>Cloning a Remote Repository</h3>

If you choose to set up your Local Repo using the terminal, these commands will be helpful for you.
The Basic Clone command is probably all we'll need for this project.

```
git clone https://github.com/username/repository.git                  # Basic Clone into New Folder
git clone https://github.com/username/repository.git my-folder-name   # Clone into a Specific Folder of Your Choice
git clone -b branch-name https://github.com/username/repository.git   # Clone a Specific Branch 
```

<h3>Staging & Committing</h3>

Essential to the Git workflow, I'm sure you are familiar with these already.

```
git status               # Show the state of your working directory
git add <file>           # Stage a specific file
git add .                # Stage all changed files
git commit -m "message"  # Commit staged changes with a message
```

<h3>Pushing & Pulling</h3>

Also essential to the Git workflow. Should be where we begin and end each session!

```
git push origin <branch>      # Push local commits to remote branch
git pull origin <branch>      # Fetch and merge remote changes
git fetch                     # Download remote changes without merging
```

<h3>Branching</h3>

The main two commands here we will be using are `git branch` and `git checkout <branch-name>`.
Essential to the workflow and ensuring you are working within the correct branch.

```
git branch                    # List all local branches
git branch <name>             # Create a new branch
git checkout <name>           # Switch to a branch
git checkout -b <name>        # Create and switch to a new branch in one step
git merge <branch>            # Merge a branch into your current branch
git branch -d <name>          # Delete a branch (safe — won't delete unmerged work)
```

<h3>Undoing Changes</h3>

This is pretty cool to know about, and new to me! Here's some quick ways to undo changes made
in a local branch if you are not interested in keeping them!

```
git restore <file>            # Discard unstaged changes in a file
git restore --staged <file>   # Unstage a file without losing changes
git revert <commit>           # Create a new commit that undoes a previous commit
git reset --soft HEAD~1       # Undo last commit but keep changes staged
```

<h3>Inspecting History</h3>

Some ways to look at the Commit History, personally I feel like `git diff` and `git diff --staged`
might prove to be the most valuable to me!

```
git log                       # Show full commit history
git log --oneline             # Show condensed commit history
git diff                      # Show unstaged changes
git diff --staged             # Show staged changes not yet committed
```


