//問題文をオリジナルに書き換え
const quiz = [
    {
      question: '製品時間の求め方で、()に入る内容はどれでしょう？　基準時間 × () ＝製品時間',
      answers: [ '生産台数', '引取台数', '操業度', '合格数'],
      correct: '合格数'
    }, {
      question: '昨年度の実績は製品H:1000H、作業H:1200Hでした。今年度は3%生産性向上が必要で、予想製品Hは1200Hでした。作業時間は何時間以下で目標達成できますか？',
      answers: [ '1396H', '1484H', '1485H', '1400H'],
      correct: '1396H'
    }, {
      question: '連2・常1直職場の基準号口率は？',
      answers: [ '90.1% ', '93.0%', '91.0%', '92.5%'],
      correct: '93.0%'
    }
    , {
      question: '以下の項目で号口作業時間に含まれるものは？',
      answers: [ '監督H', 'QC', '交通安全Mtg', '有給休憩'],
      correct: '監督H'
    }
    , {
      question: 'この場合の能率を求めてください。基準時間0.5H/台、合格数100台/直、在籍人員10名/直、出勤率90%、作業時間 8H/人、総残業1H/直、基準号口率90.1%',
      answers: [ '0.771', '0.617', '1.620', '0.685'],
      correct: '0.685'
    }
  ];
  
  const $window = window;
  const $doc = document;
  const $question = $doc.getElementById('js-question');
  const $buttons = $doc.querySelectorAll('.btn');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    const buttonLen = $buttons.length;
    
  //while文をforループ文に変更
    for(let i = 0 ; i < buttonLen ; i++ ){
      $buttons[i].textContent = quiz[quizCount].answers[i];
    }
  };
  
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      showEnd();
    }
  };
  
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('正解!');
      score++;
    } else {
      $window.alert('不正解!');
    }
    goToNext();
  };
  
  //全問正解したら合格、1問でも間違えたら不合格にする
  //点数表記
  const showEnd = () => {
    if (score === quizLen) {
    $question.textContent = '明日からあなたは生産性担当です！スコアは' + Math.round( score / quizLen * 100 ) + '点です';
    } else {
    $question.textContent = 'ちゃんと勉強してください!! あなたのスコアは' + Math.round( score / quizLen * 100) + '点です';
      }
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }


// //カウンタを追加  
// let count = 0; //カウントの初期値
// timerID = setInterval('countup()',1000); //1秒毎にcountup()を呼び出し
  
// function countup() {
//     count++;
//     document.form_count.counter.value = count + "秒経過";
//   }

$(window).on("load", function () {
    $(".js_trigger_sample").on("click", function () {
      var elm = $($(this).parent()).find(".default"), tmp = $(this).attr("src");
      elm.addClass("active");
      elm.removeClass("default");
      elm.find("img").attr("src", tmp)
    });
});
