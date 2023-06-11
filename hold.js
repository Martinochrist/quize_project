
// the list of qestion to be displayed on the box


// remove all active classes when continue button will click
continuebtn.addEventListener("click" , ()=>{
    quiz.style.display = "block";

    loadDate();

    // remove all active classes when continue button willl click
    choice_ques.forEach(removeActive =>{
        removeActive.classList.remove("active")
        
        
        total_correct.innerHTML = `${correct = 0}out of ${MCQS.length} Question` 
        total_correct.style.display = "block"
    })
})
