const timer = document.getElementById("timer");
const btnStart = document.getElementById("btnStart");
const btnPause = document.getElementById("btnPause");
const btnStop = document.getElementById("btnStop");

let countdown; 
let timeLeft = 60;

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timer.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  
  if (timeLeft < 15) {
  	timer.classList.add("below15");
  }

  if (timeLeft >= 15) {
  	timer.classList.remove("below15");
  }
  
  if (timeLeft == 0) {
  btnPause.textContent = "Pause";
  btnStart.disabled = false;
  btnStop.disabled = true;
  btnPause.disabled = true;
  }
}

updateTimer();

btnStart.disabled = false;
btnPause.disabled = true;
btnStop.disabled = true;

btnStart.addEventListener("click", () =>{

		btnStart.disabled = true;
		btnPause.disabled = false;
		btnStop.disabled = false;
		countdown = setInterval(() => {
			timeLeft--;
			updateTimer();
			if (timeLeft === 0) { 
				clearInterval(countdown);
				 alert("Take a short break!"); 
			 }
	}, 1000);
});


btnPause.addEventListener("click", () => {
  if (btnPause.textContent === "Pause") {
    clearInterval(countdown);
    btnPause.textContent = "Resume";
  } else {
    countdown = setInterval(() => {
      timeLeft--;
      updateTimer();

      if (timeLeft === 0) {
        clearInterval(countdown);
        alert("Take a short break!");
      }
    }, 1000);

    btnPause.textContent = "Pause";
  }
});

btnStop.addEventListener("click", () => {
	clearInterval(countdown);
	timeLeft = 60;
	updateTimer();
	btnPause.textContent = "Pause";
	btnStart.disabled = false;
	btnStop.disabled = true;
	btnPause.disabled = true;
	
});

