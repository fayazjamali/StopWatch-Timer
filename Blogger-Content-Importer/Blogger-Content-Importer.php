<?php
/*
Plugin Name: Blogger-Content-Importer
Plugin URI: https://www.example.com/my-plugin/
Description: Blogger-Content-Importer plugin allows users to import their content from a Blogger site in XML format and convert it into WordPress-compatible content. 
This makes it easier for users to switch from Blogger to WordPress without having to manually transfer their content.
Blogger-Content-Importer works by parsing the XML file and converting the content into WordPress posts, pages, categories, 
and tags. It preserves the formatting and metadata of the original content, such as author names, publish dates, and images.
With Blogger-Content-Importer plugin, users can save time and effort by automating the content migration process and ensuring that their Blogger 
content is seamlessly integrated into their WordPress site.
Version: 1.0.0
Author: Fayaz Ahmed
Author URI: https://www.example.com/
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

// Include the HTML and CSS files
include 'index.html';
include 'style.css';

// Add form handling to admin menu
add_action('admin_menu', 'my_plugin_menu');
function my_plugin_menu() {
    add_menu_page('Blogger to WordPress Importer', 'Blogger Importer', 'manage_options', 'blogger-importer', 'my_plugin_import_content');
}

function my_plugin_import_content() {
    // Check if form has been submitted
    if (isset($_POST['submit'])) {
        
        // Check if file has been uploaded
        if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
            // Get uploaded file data
            $file = $_FILES['file']['tmp_name'];
        } elseif (isset($_POST['url']) && !empty($_POST['url'])) {
            // Get data from URL
            $url = $_POST['url'];
            $file = file_get_contents($url);
        } else {
            // Show error message
            echo "Error: Please select a file or enter a URL.";
            return;
        }
        
        // Parse XML data
        $xml = simplexml_load_string($file);
        
        // Convert Blogger content to WordPress content
        $new_posts = array();
        foreach ($xml->entry as $entry) {
            $post = array();
            $post['post_title'] = (string) $entry->title;
            $post['post_content'] = (string) $entry->content;
            $post['post_date'] = (string) $entry->published;
            $post['post_author'] = (string) $entry->author->name;
            $post['post_type'] = 'post';
            $post['post_status'] = 'publish';
            
            // Add post categories
            $categories = array();
            foreach ($entry->category as $category) {
                $categories[] = (string) $category['term'];
            }
            if (!empty($categories)) {
                $post['post_category'] = $categories;
            }
            
            // Add post tags
            $tags = array();
            foreach ($entry->category as $category) {
                if ((string) $category['scheme'] == 'http://www.blogger.com/atom/ns#') {
                    $tags[] = (string) $category['term'];
                }
            }
            if (!empty($tags)) {
                $post['tags_input'] = implode(',', $tags);
            }
            
           // Add post thumbnail
            $thumbnail_url = (string) $entry->thumbnail['url'];
            if (!empty($thumbnail_url)) {
            $post['post_thumbnail'] = media_sideload_image($thumbnail_url, 0);
            }

            // Add post meta
            $meta = array();
            foreach ($entry->link as $link) {
            if ((string) $link['rel'] == 'alternate') {
            $meta['_blogger_permalink'] = (string) $link['href'];
            }
            }
            if (!empty($meta)) {
            foreach ($meta as $key => $value) {
            add_post_meta($post_id, $key, $value);
            }
            }

            // Add post to array
            $new_posts[] = $post;
            }
            // Add new posts to WordPress
            foreach ($new_posts as $post) {
            $post_id = wp_insert_post($post);
            if ($post_id) {
            echo "Post added: " . $post['post_title'] . "<br>";
            } else {
            echo "Error adding post: " . $post['post_title'] . "<br>";
            }
            }

            echo "Import complete.";

            ?>

<!-- HTML code from index.html file -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blogger-Content-Importer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrap">
        <h2>Blogger to WordPress Importer</h2>
        <form method="post" enctype="multipart/form-data">
            <label for="file">Select XML file:</label>
            <input type="file" name="file" id="file"><br>
            <label for="url">or enter Blogger URL:</label>
            <input type="text" name="url" id="url"><br>
            <input type="submit" name="submit" value="Import">
        </form>
    </div>
</body>
</html>

