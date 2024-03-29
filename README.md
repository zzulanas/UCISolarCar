# UCI Solar Car

This is a website for UCI Solar Car

Built with:
* [GatsbyJS](https://www.gatsbyjs.org/) (Make sure you have the CLI installed ```npm install -g gatsby-cli```)
* [Bulma](https://bulma.io/)
* [Netlify & NetlifyCMS](https://www.netlify.com/)

If continuing development work:

After cloning, run 
```
npm install
npm run css-build
gatsby develop
```

Now the website should be up and running on localhost:8000

## Writing blog posts

If you're updating blog posts or media assets on the website, go to the website and /admin/ tab, create or login with your account and then you can post from there.

Note: If doing local development and you make a blogpost on localhost:8000, the current config.yml file will push the blogpost to the live website, not your local changes, and it will commit to github, so you will need to pull to avoid conflicts
