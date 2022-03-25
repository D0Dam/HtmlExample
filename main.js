function changeContentsToTitle() {
	document.querySelector(".mainContent").innerHTML = `
    <h2 class="subtitle">안녕하세요!</h2>
        <div class="content">
        이번에
        <a href="https://bcsdlab.com/track/frontend">BCSD의 FrontEnd 트랙</a
        >에 들어오게 된 김민재 입니다!
    </div>`;
}

function changeContentsToAM() {
	document.querySelector(".mainContent").innerHTML = `
    <table class="mainTable">
    <h2 class="subtitle">About me</h2>
    <tr class="tr1">
        <th>이름</th>
        <th>생년월일</th>
        <th>주소지</th>
    </tr>
    <tr class="subtr1">
        <td>김민재</td>
        <td>2000.06.28</td>
        <td>충청북도 청주시</td>
    </tr>
    <tr class="tr2">
        <th>연락처</th>
        <th>이메일</th>
        <th>학력</th>
    </tr>
    <tr class="subtr2">
        <td>010-5148-8712</td>
        <td>skynickmj@koreatech.ac.kr</td>
        <td>한국기술교육대학교</td>
    </tr>
</table>`;
}

function changeContentsToSK() {
	document.querySelector(".mainContent").innerHTML = `
    <h2>Skills</h2>
    <div class="skills">
        <div class="skill"><i class="fab fa-html5 fa-5x"></i>HTML</div>
        <div class="skill"><i class="fa-brands fa-css3 fa-5x"></i>CSS</div>
        <div class="skill"><i class="fa-brands fa-js fa-5x"></i>JavaScript</div>
    </div>`;
}

function changeContentsToAR() {
	document.querySelector(".mainContent").innerHTML = `
    <h2>Archiving</h2>
    <div class="arContents">
        <div class="github">
            <div class="githubLink"><a href="https://github.com/D0Dam"><i class="fa-brands fa-github"></i><div>github</div></a></div>
            <div class="arname">소스코드 저장소 입니다.</div>
            <ul>
                <li>공부한 프로젝트 코드들이 있어요!</li>
                <li>참고 될만한 사이트도 기록해 놓았어요!</li>
                <li>알고리즘도 공부했답니다!</li>
            </ul>
        </div>
        <div class="devLog">
            <div class="devLogLink"><a href="https://cl0clam.tistory.com/"><i class="fa-solid fa-book-open"></i>DevLog</a></div>
            <div class="arname">공부한 지식 기록 ,공유 공간입니다.</div>
            <ul>
                <li>모르는 개념을 기록해 놓았어요!</li>
                <li>깃허브에 있는 프로젝트에 대한 설명글도 있어요!</li>
                <li>알고리즘 포스팅도 있답니다!</li>
            </ul>
        </div>
    </div>`;
}

function clickBars() {
	alert("미구현 기능입니다!");
}

function changeTem() {
	let targetTitle = document.querySelector(".mainTitle");
	let targetNM = document.querySelector(".navmain");
	let targetMC = document.querySelector(".mainContent");
	let targetNLi = document.querySelectorAll(".nav");
	let buttonState = document.querySelector(".toggleButton");
	if (buttonState.checked == true) {
		targetTitle.style.backgroundColor = "#1a1a40";
		targetMC.style.backgroundColor = "#2d4263";
		targetNM.style.backgroundColor = "#2d4263";
		for (let i = 0; i < targetNLi.length; i++) {
			const item = targetNLi.item(i);
			item.style.backgroundColor = "#1a1a40";
		}
		document.querySelector("body").style.color = "white";
	} else {
		targetTitle.style.backgroundColor = "#a6b1e1";
		targetMC.style.backgroundColor = "#f4eeff";
		targetNM.style.backgroundColor = "#f4eeff";
		for (let i = 0; i < targetNLi.length; i++) {
			const item = targetNLi.item(i);
			item.style.backgroundColor = "#a6b1e1";
		}
		document.querySelector(".mainContent").style.color = "black";
	}
}
