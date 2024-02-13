 // Fonction pour changer la langue avec Google Translate
    function changeLanguage(lang) {
      // Utilisez le code de la langue pour construire l'URL Google Translate
      var googleTranslateUrl = 'https://translate.google.com/translate?hl=en&sl=fr&tl=' + lang + '&u=' + encodeURIComponent(window.location.href);

      // Redirige vers l'URL Google Translate
      window.location.href = googleTranslateUrl;
    }