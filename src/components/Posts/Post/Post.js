import React from 'react';
// import ReactDom from 'react-dom';

const Post = () => {
    return (
        <div>
            <h1>This is the H1 Heading</h1>
            <p>Above this paragraph should be the H1 heading for your web page. If it is not visible, the design settings for the H1 tag is set to <code>display:none</code> which many WordPress Themes use to hide the blog title text and replace it with a graphic. Do not use H1 within your blog post area.</p>
            <p>If the design in the H1 heading looks like your blog title or blog post title, then that is the style set for that HTML tag and you should not use it within your blog post area.</p>
            <p>Inside of this test data section are most of the basic HTML and XHTML and CSS styles that you might use within your WordPress Theme. You need to know what that will look like as part of structuring your styles.</p>
            <h2>This is the H2 Heading</h2>
            <p>Above this paragraph should be the H2 heading for your web page. WordPress Themes use the h2 heading for various purposes. Logically, it should be either the post title or the first heading in the post content.</p>
            <p>However, it is used all over WordPress Themes including the subtitle, tag line, post title, comment area, sidebar area, and even in the footer. Be specific when styling each h2 headings to ensure you are not styling all of them.</p>
            <h3>This is the H3 Heading</h3>
        </div>
    )
}

export default Post;