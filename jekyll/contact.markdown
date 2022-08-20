---
layout: default
title: Contact us
permalink: /contact/
description: Contact AFKology, send us an email
---
<!-- <div class="ratio ratio-1x1" style="height: 800px;">
    <iframe scrolling="no" style="height: 800px;" src="https://us20.list-manage.com/contact-form?u=a5f5fcedb501461da7bb19809&form_id=edbc2927ceed7728323c8bdccba4f743" ></iframe>
</div> -->
<script src="https://www.google.com/recaptcha/api.js"></script>
<script>
   function onSubmit(token) {
     document.getElementById("contact-form").submit();
   }
 </script>

<form action="/assets/contact.php" id="contact-form" method="post">
  <div class="mb-3">
    <label for="name" class="form-label">Your Name</label>
    <input type="text" id="name" name="visitor_name" class="form-control" required style="background-color: #ffffff">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Your E-mail</label>
    <input type="email" id="email" name="visitor_email" class="form-control required email" required style="background-color: #ffffff">
  </div>
  <div class="mb-3">
    <label for="message" class="form-label">Write your message</label>
    <textarea id="message" name="visitor_message" class="form-control"  style="background-color: #ffffff"></textarea>
  </div>
  <div class="d-grid gap-2">
    <!-- <button type="submit" class="btn btn-light">Send Message</button> -->
    <button class="g-recaptcha" 
        data-sitekey="6Ldh0aYgAAAAAE7EFdvi-29v0KoQdNwPl95TbVEq" 
        data-callback='onSubmit' 
        class="btn btn-light"
        data-action='submit'>Send Message</button>
  </div>
  <br />
  <hr />
  <div class="text-center pt-4 pb-4">
    For any general or PR enquiries, please contact us at: <br />
    office@afkology.com
  </div>

  <input type="text" id="website" name="website" style="display:none;"/> 
</form>