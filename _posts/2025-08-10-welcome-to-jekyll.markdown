---
layout: post
title:  "Welcome to Jekyll!"
date:   2025-08-10 14:37:06 -0500
categories: jekyll update


gallery:
  - url: /assets/images/celesteBetter.jpg
    image_path: /assets/images/celesteBetter.jpg
    alt: "placeholder image 1"
    title: "Image 1 title caption"
  - url: /assets/images/insideWallpaper.jpg
    image_path: /assets/images/insideWallpaper.jpg
    alt: "placeholder image 2"
    title: "Image 2 title caption"
  - url: /assets/images/journeyPaper.jpg
    image_path: /assets/images/journeyPaper.jpg
    alt: "placeholder image 3"
    title: "Image 3 title caption"
  - url: https://picsum.photos/400/300
    image_path: https://picsum.photos/400/300
  - url: https://picsum.photos/400/300
    image_path: https://picsum.photos/400/300
  - url: https://picsum.photos/500/300
    image_path: https://picsum.photos/500/300
  - url: https://picsum.photos/400/500
    image_path: https://picsum.photos/400/500
  - url: https://picsum.photos/200/300
    image_path: https://picsum.photos/200/300
  - url: https://picsum.photos/500/300
    image_path: https://picsum.photos/500/300

---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}
dumb
{% include igallery.html caption="This is a sample gallery with **Markdown support**." %}


Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/


#TODO should the gallery be derived from a folder instead?
#maybe not for now just because its still nice to be able to add captions
#and potentially bigger images that popup

#TODO the one thing that would definitely be nice would be to fill the collums as needed as you scroll...