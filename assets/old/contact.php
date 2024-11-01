<?php
if(!empty($_POST['website'])) die();
if($_POST) {
    $visitor_name = "";
    $visitor_email = "";
    $visitor_message = "";
    $email_body = "<div>";
    $recipient = "office@afkology.com";
      
    if(isset($_POST['visitor_name'])) {
        $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Visitor Name:</b></label>&nbsp;<span>".$visitor_name."</span>
                        </div>";
    }
 
    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                           <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
                        </div>";
    }
      

    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
        $email_body .= "<div>
                           <label><b>Visitor Message:</b></label>
                           <div>".$visitor_message."</div>
                        </div>";
    }
      
    $email_body .= "</div>";
 
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $recipient . "\r\n";
      
    if(mail($recipient, "New website email", $email_body, $headers)) {
        echo "<p>Thank you for contacting us, $visitor_name. You will get a reply within 24 hours. You will be redirected back or click <a href='https://www.afkology.com/contact/'>here</a></p>";
    } else {
        echo "<p>We are sorry but the email did not go through. You will be redirected back or click <a href='https://www.afkology.com/contact/'>here</a></p>";
    }
    header( "refresh:3;url=http://www.afkology.com/contact/" );
} else {
    echo '<p>Something went wrong</p>';
    header( "refresh:3;url=http://www.afkology.com/contact/" );
}
?>