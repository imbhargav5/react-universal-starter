workflow "Deploy Master" {
  on = "push"
  resolves = ["release-master"]
}

# Filter for master branch
action "master-branch-filter" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "yarn-install" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

# Deploy, and write deployment to file
action "deploy" {
  needs = "yarn-install"
  uses = "actions/zeit-now@master"
  args = "deploy --no-clipboard --team imbhargav5 > $HOME/$GITHUB_ACTION.txt"
  secrets = ["ZEIT_TOKEN"]
}

# Always create an alias using the SHA
action "alias" {
  needs = "deploy"
  uses = "actions/zeit-now@master"
  args = "alias --team imbhargav5 `cat /github/home/deploy.txt` $GITHUB_SHA"
  secrets = ["ZEIT_TOKEN"]
}


# Requires now.json in repository
action "release-master" {
  needs = ["master-branch-filter","alias"]
  uses = "actions/zeit-now@master"
  secrets = ["ZEIT_TOKEN"]
  args = "alias --team imbhargav5"
}
