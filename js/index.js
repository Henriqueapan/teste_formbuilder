// jQuery($ => {
//     $(document.querySelector('#form-builder-wrap')).formBuilder();

// });

jQuery(function($) {
    var $fbEditor = $(document.getElementById('form-builder-wrap')),
        $formContainer = $(document.getElementById('fb-rendered-form')),
        fbOptions = {
            onSave: function() {
            $fbEditor.toggle();
            $formContainer.toggle();
            $('form', $formContainer).formRender({
                formData: formBuilder.formData
            });
            }
        },
      formBuilder = $fbEditor.formBuilder(fbOptions);
  
    $('.edit-form', $formContainer).on('click', function() {
      $fbEditor.toggle();
      $formContainer.toggle();
    });
});