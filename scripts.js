$(function () {
  // elemek összegyűjtése
  let $button = $('button.btn');
  let $email = $('input[type="email"]');
  let $pass = $('input[type="password"]');
  let $alertSuccess = $('div.alert-success');
  let $alertFailed = $('div.alert-danger');

  // email és jelszó megadása
  const email = 'user@domain.hu';
  const pass = 'user';

  //  click eseményre reagálás
  $button.click(function(event) {
    // alapértelemezett eseményre reagálás -> megakasztás
    event.preventDefault();

    //  eldönteni a bejelentkezési adatok jók-e
    if ( email === $email.val() && pass === $pass.val() ) {
      // sikeres bejelentkezés
      $alertFailed.hide();
      $alertSuccess.show();
    } else {
      // sikertelen bejelentkezés
      $alertSuccess.hide();
      $alertFailed.show();
    }
    
  });
});
