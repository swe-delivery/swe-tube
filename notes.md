# Notes

Here, we'll keep track of the outcomes of our discussions:

## Version control

### Naming branches

The primary branch should be named `main` not `master`. When apprentices are installing git, there is an option for this which they should select.

If a branch is named `master`,
 - go to github.com
 - click branches
 - click the :pencil: next to the branch to be renamed
 - rename it

Then, to rename the branch locally and link it to the remote, run these commands
```
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```
