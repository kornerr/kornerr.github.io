Title: Git squash hype
Slug: git-squash-hype
Lang: en
Date: 2019-05-22 13:40
Category: mercurial

I've got an email from Atlassian today:

![Git squash hype][git-squash-hype]

that leads to [this BitBucket blog post][blog-post]. Apparantly Git users use squash to liberate their history from noise.

I just wanted to note that Mercurial does this kind of "noise removal" by default: one simply merges development branch into `default` one, and `default` one gets a complete diff into, as a single commit.

[blog-post]: https://bitbucket.org/blog/git-squash-commits-merging-bitbucket
[git-squash-hype]: ../../img/2019-05-22_git-squash-hype.png
