
    let subjectCount = 0;
    let totalCredits = 0;
    let totalPoints = 0;

    function addSubject() {
      let subject = document.getElementById('Matkul').value;
      let index = document.getElementById('Index').value;
      let credit = parseInt(document.getElementById('SKS').value);
      
      if (index == "A"){
        index = 4;
      } else if (index == "A-"){
        index = 3.7;
      } else if (index == "B+"){
        index = 3.3;
      } else if (index == "B"){
        index = 3;
      } else if (index == "B-"){
        index = 2.7;
      } else if (index == "C+"){
        index = 2.3;
      } else if (index == "C"){
        index = 2;
      } else if (index == "D"){
        index = 1;
      } else if (index == "E"){
        index = 0;
      } else {
        alert("Error: Invalid index");
        return;
      }

      if (credit < 1){
        alert("Error: Invalid credit");
        return;
      }


      totalCredits += credit;
      totalPoints += index * credit;
      subjectCount += 1;

      const courseList = document.getElementById('courseList');
      const courseItem = document.createElement('div');
      courseItem.className = 'course';
      courseItem.textContent = `- ${subject} (${credit} credits)`;
      courseList.appendChild(courseItem);

      document.getElementById('Matkul').value = '';
      document.getElementById('Index').value = '';
      document.getElementById('SKS').value = '';
      document.getElementById('subjectlist').textContent = `Subject You Took: ${subjectCount}`;
    }

    function calculateGPA() {
      let gpa = (totalPoints / totalCredits).toFixed(2);
      if (totalPoints > 0){
      document.getElementById('gpaResult').textContent = `Your GPA: ${gpa}`;
      }
      else{
        document.getElementById('gpaResult').textContent = `Your GPA: 0.00`;
      }
      document.getElementById('credit').textContent = `Your Total Credit: ${totalCredits}`;
    }
    
    function reset() {
      gpa = 0
      totalCredits = 0
      totalPoints = 0
      subjectCount = 0
      document.getElementById('credit').textContent = `Your Total Credit: ${totalCredits}`;
      document.getElementById('subjectlist').textContent = `Subject You Took: ${subjectCount}`;
      document.getElementById('gpaResult').textContent = `Your GPA: 0.00`;
      document.getElementById('courseList').textContent = ''
    }
    const inputIndex = document.getElementById('Index');
    const dropdownList = document.getElementById('dropdown');
    const dropdownItems = dropdownList.querySelectorAll('div');

    // Show dropdown on focus
    inputIndex.addEventListener('focus', () => {
      dropdownList.style.display = 'block';
    });
  
    // Filter dropdown items on input
    inputIndex.addEventListener('input', () => {
      const value = inputIndex.value.toLowerCase();
      let anyVisible = false;
  
      dropdownItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(value)) {
          item.style.display = 'block';
          anyVisible = true;
        } else {
          item.style.display = 'none';
        }
      });
  
      // Only show dropdown if there are visible items
      dropdownList.style.display = anyVisible ? 'block' : 'none';
    });
  
    // Select item on click
    dropdownItems.forEach(item => {
      item.addEventListener('click', () => {
        inputIndex.value = item.textContent.trim(); // Use trim() to remove any extra whitespace
        dropdownList.style.display = 'none';
      });
    });
  
    // Hide the dropdown when clicking outside
    document.addEventListener('click', (e) => {
      // Check if the click is outside the input and the dropdown itself
      // The parent of the dropdown is .Index, so we check that
      if (!e.target.closest('.Index')) {
        dropdownList.style.display = 'none';
      }
    });
    

    // document.querySelector('button[type="addsubject"]').addEventListener('click', addSubject);
    // document.querySelector('button[type="GPA"]').addEventListener('click', calculateGPA);
    // document.querySelector('button[type="reset"]').addEventListener('click', reset);