document.addEventListener("DOMContentLoaded",
    function(e){
        let linkButton = document.querySelector("#main_button_visual")
        
        linkButton.addEventListener("click",
            function(e){
                let link = "https://github.com/Xero-00"
                location.href = link
            }
        )

        linkButton.addEventListener("mouseover",
            function(e){
                linkButton.style.backgroundColor = "rgb(200,200,200)"
                linkButton.style.cursor = "pointer"
            }
        )

        linkButton.addEventListener("mouseleave",
            function(e){
                linkButton.style.backgroundColor = "rgb(245,245,245)"
            }
        )

        
        let XButton = document.querySelector("#top_X")

        let timerIDInterval = 0
        let timerIDCount = 0
        let timerIDTimeout = 0
        let timerIDTimeout_2 = 0

        XButton.addEventListener("click",
            function(e){
                let countNum = 0
                let displayNum = 3

                let Phase1st = document.querySelector("#Phase_1")
                let Phase2nd = document.querySelector("#Phase_2")
                
                //3초 Count 후 Phase 2를 알리는 구문
                function normalText() {
                    Phase1st.innerHTML = "404 Not Found: " + displayNum
                    countNum++
                    displayNum = 3 - countNum
                }
                function nyanText() {
                    Phase1st.innerHTML = "404 'Nyan' Found"
                }        
                function clearTimerA() {
                    clearInterval(timerIDInterval)
                }

                //Phase 2를 실행하는 구문
                let nyanCount = 0

                function createDiv(nyanCount) {
                    const newImg = document.createElement("img")
                    newImg.setAttribute("src", "images/popupcat.jpeg")
                    newImg.style.fontSize = "10vw"
                    newImg.style.position = "absolute"
                    let nyanString = nyanCount.toString()
                    newImg.style.zIndex = nyanString
                    let popUpSpaceNum = 0.1 * nyanCount
                    let popUpSpaceString = popUpSpaceNum.toString() + "vw"
                    newImg.style.paddingTop = popUpSpaceString
                    newImg.style.paddingLeft = popUpSpaceString
                    Phase2nd.appendChild(newImg)
                }

                let timerIDIntervalPopUp = 0

                function nyanPopup() {
                    createDiv(nyanCount)
                    nyanCount++
                }

                function popUpTimer() {
                    clearInterval(timerIDIntervalPopUp)
                }

                let timerIDTimeoutPopUp = 0

                function nyanTimer() {
                    Phase1st.style.display = "none"
                    Phase2nd.style.display = "block"

                    timerIDIntervalPopUp = setInterval(nyanPopup, 5)
                    timerIDTimeoutPopUp = setTimeout(popUpTimer, 2020)
                }

                normalText()
                timerIDInterval = setInterval(normalText, 1000)
                timerIDCount = setTimeout(clearTimerA, 3000)
                timerIDTimeout = setTimeout(nyanText, 4000)

                timerIDTimeout_2 = setTimeout(nyanTimer, 5000)
            }
        )
    }
)