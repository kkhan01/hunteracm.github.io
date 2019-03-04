# Hunter ACM Website

This an initial draft of the new Hunter ACM website. Hunter.acm.org will redirect there. Please update your bios and include a photo of yourself. Your bio can be as long or as short as you want it to be, and can include images, gifs, emojis, etc. Have fun with it!

Your bio is at `_posts/<date>-<yourname>`.

## Before we launch the new site, we must:
- [ ] Attribute any images we use.
- [ ] Consider replacing the jumbotron image. We're currently using stefan-stefancik-257625-unsplash, which came with the theme.
- [ ] Complete board member bios.
- [x] Replace the stock images in board member bios. (Maybe just use your GitHub avatars?)
- [x] Test ideal photo size and quality for the featured images in board member bios.
- [x] Remove or update `<a target="_blank" class="link-dark" href="{{ author.web }}">{{ author.display_name }}</a><a target="_blank" href="{{ author.twitter }}" class="btn follow">Follow</a>` in `_layouts/post.html`.
- [ ] (Optional) Add individual board members as authors in in `_config.yml`.
- [x] Publish the Facebook page.

## Contributing:

Contributing is currently limited to board members. This will change after the site is launched. If you're updating your bios or fixing typos / grammatical errors, feel free to make your changes and commit directly to master. For anything else, please submit an issue first. The active development branch is [dev](https://github.com/hunteracm/hunteracm.github.io/tree/dev) and all contributions, other than those previously specified, will only be accepted here. Pull requests must be reviewed before merging.

If you don't feel comfortable commiting directly to the master branch or working in the dev branch, you can create a new branch and work from there. Here's how to get started:

1. Clone this repo: `https://github.com/hunteracm/hunteracm.github.io.git`
2. Navigate to the correct directory: `hunteracm.github.io`
3. Download dependencies: `bundle`
4. Create a new branch: `git checkout -b <branch-name>` or however you like to create branches
5. Serve the site: `jekyll serve --watch`

This website is adapted from an existing theme. Check out [the original theme's repository](https://github.com/wowthemesnet/affiliates-jekyll-theme) to learn about how to download and serve the site. 
