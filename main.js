
async function loadCourses() {
  const res = await fetch('data/courses.json');
  const courses = await res.json();
  const list = document.getElementById('course-list');
  list.innerHTML = '';
  courses.forEach(course => {
    const li = document.createElement('li');
    li.className = 'course-item';
    li.innerHTML = course.name + '（' + course.type + '）学分：' + course.credit +
      '<button onclick="takeCourse(\'' + course.name + '\')">上课</button>';
    list.appendChild(li);
  });
}

function takeCourse(courseName) {
  document.getElementById('log').innerText = '你选择了课程：' + courseName + '，上课成功！';
}

loadCourses();
