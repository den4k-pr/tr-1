document.addEventListener('DOMContentLoaded', function() {
    var faqQuestions = document.querySelectorAll('.s12-faq-question');
    
    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        var item = this.parentElement;
        var wrapper = item.querySelector('.s12-faq-answer-wrapper');
        var isActive = item.classList.contains('active');
        
        // (Опціонально) Закрити всі інші відкриті питання
        // document.querySelectorAll('.s12-faq-item').forEach(function(otherItem) {
        //   otherItem.classList.remove('active');
        //   otherItem.querySelector('.s12-faq-answer-wrapper').style.maxHeight = null;
        // });
        
        if (!isActive) {
          item.classList.add('active');
          wrapper.style.maxHeight = wrapper.scrollHeight + "px";
        } else {
          item.classList.remove('active');
          wrapper.style.maxHeight = null;
        }
      });
    });
  });