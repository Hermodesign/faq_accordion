const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faqs.forEach((item) => {
      if (item !== faq && item.classList.contains('active')) {
        item.classList.remove('active');
        const img = item.querySelector('img');
        img.src = '/assets/images/icon-plus.svg';
      }
    });

    faq.classList.toggle('active');
    const img = faq.querySelector('img');

    if (faq.classList.contains('active')) {
      img.src = '/assets/images/icon-minus.svg';
    } else {
      img.src = '/assets/images/icon-plus.svg';
    }
  });
});
