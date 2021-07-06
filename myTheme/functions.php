<?php

function my_function() {
    // This will load your default style.css
    wp_enqueue_style('main_style', get_stylesheet_uri());

    // // This will load custom.css located in the css folder
    wp_enqueue_style('main_style', get_theme_file_uri('/css/style.css'));
}
add_action('wp_enqueue_scripts', 'my_function');

function my_function_admin_bar(){ return false; }
add_filter( 'show_admin_bar' , 'my_function_admin_bar');


function addJS() {
    // This will load your default style.css
    // wp_enqueue_style('main_style', get_stylesheet_uri());

    // // This will load custom.css located in the css folder
  
    wp_enqueue_script( 'script1', get_template_directory_uri() . '/scripts/loadScreen.js', array(), '1.0.1', true );
    
    if (!is_page_template( 'template-klub.php' )) {
        wp_enqueue_script( 'script-name', get_template_directory_uri() . '/scripts/intro.js', array(), '1.0.2', true );
    }
    


}
add_action( 'wp_enqueue_scripts', 'addJS' );
?>



