
const items = document.querySelectorAll('.items')
const answers = document.querySelectorAll('.answer-box')
const allquestions = document.querySelectorAll('.question-box')


items.forEach((item) => {

  const question = item.querySelector('.question-box')
  const answer = item.querySelector('.answer-box')


  question.addEventListener('click', () => {

    const answerheight = answer.scrollHeight
    // console.log(answerheight);

    items.forEach((it) => {

      const Qbox = it.querySelector('.question-box')
      const Abox = it.querySelector('.answer-box')


      if (it !== item) {
        Abox.style.height = 0;
        it.classList.remove('close')
        Qbox.classList.remove('close')
      }

    })

    if (item.classList.contains('close')) {
      item.classList.remove('close');
      question.classList.remove('close');
      answer.classList.remove('close');
      answer.style.height = 0;

    } else {
      item.classList.add('close');
      question.classList.add('close');
      answer.classList.add('close');
      answer.style.height = answerheight + "PX";

    }

  })






















})