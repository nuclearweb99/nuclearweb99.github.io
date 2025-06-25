document.addEventListener('DOMContentLoaded', function () {
  if (Math.random() < 1) {
    const imageUrl = 'img/dope/dopefish.png';
    const targetUrl = 'dopefish.html';

    const imgButton = document.createElement('img');
    imgButton.src = imageUrl;
    imgButton.alt = 'The Second dumbest thing in the universe awaits...';
    imgButton.style.cursor = 'pointer';
    imgButton.style.width = '150px';
    imgButton.style.height = 'auto';
    imgButton.style.display = 'block';
    imgButton.style.margin = '40px auto'; // center + margin top

    imgButton.onclick = () => {
      window.location.href = targetUrl;
    };

    // Add a horizontal rule or spacer div to force separation if needed
    const spacer = document.createElement('div');
    spacer.style.clear = 'both';      // clear floats if any
    spacer.style.height = '50px';     // add vertical spacing

    document.body.appendChild(spacer);
    document.body.appendChild(imgButton);
  }
});
