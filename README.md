# Spire Theme by zeespire.com
 
## Initial settings
    - Open _config.yml and customize settings.
    - Edit .htaccess.
    - Run clean.bat to delete temporary files.
    - Run develop.bat to start the development server.
    - Run build.bat to create the _site folder and prepare for production.
    - git-push.bat is a helper script to clean project, stage all files, commit and push to GIT.
    - Replace favicons in root folder and site.webmanifest. https://favicon.io/favicon-converter/
    - Use Google Tag Manager to add Google Analytics and Pinterest Analytics

### How to add a post
    1. Go to _posts folder
    2. Create a new file following the name convention from the old posts from _posts folder.
    3. Add images into ./assets/images/posts/number/full/ full size, 1200px width thumbnails into ./assets/images/posts/number/1200/ and 600px size in ./assets/images/posts/number/600/. You can create thumbnails using https://picresize.com/en/batch and convert them to webp for better compression with https://cloudconvert.com/. For better speed use .webp extension
    3. Take a look at the example posts to see how you can add a featured image, featured image thumbnail, featured image style, add an image gallery inside the post and add more images inside the post.
    4. Use Bootstrap 5 to customise your posts. https://getbootstrap.com/docs/5.0/getting-started/introduction/

### Customise pages
    - For homepage edit: ./_layouts/homepage-style-1.html
    - For posts edit: ./_layouts/post-style-1.html
    - For Contact and About page edit: ./about.markdown, ./contact.markdown