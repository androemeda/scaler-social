let outputContainer = document.getElementById("output");

function render() {
  const textbox = document.getElementById('tweet-box');
  const title = textbox.value;

  let element = document.createElement('div');

  element.classList.add("element");

  let upper = document.createElement('div');

  upper.classList.add("upper");

  let userImage = document.createElement('img');
  userImage.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739";
  upper.appendChild(userImage);

  let username = document.createElement('div');
  username.innerText = "kartik deshpande";
  upper.appendChild(username);

  let editImage = document.createElement('img');
  editImage.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661";
  editImage.addEventListener('click', function(){
    alert("you can now edit your tweet.");
    titleElement.contentEditable = true;
  })
  editImage.classList.add("editImage");
  upper.appendChild(editImage);

  let deleteImage = document.createElement('img');
  deleteImage.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643";
  deleteImage.addEventListener('click', function() {
    if (confirm("Are you sure you want to delete this tweet?")) {
        outputContainer.removeChild(element);
    }
  });
  deleteImage.classList.add("deleteImage");
  upper.appendChild(deleteImage);

  element.appendChild(upper);

  let titleElement = document.createElement('div');
  titleElement.innerText = title;
  element.appendChild(titleElement);

  titleElement.classList.add("title");

  let lower = document.createElement('div');

  lower.classList.add("lower");

  let commentImage = document.createElement('img');
  commentImage.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619";
  lower.appendChild(commentImage);

  let heartImage = document.createElement('img');
  heartImage.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
  lower.appendChild(heartImage);

  heartImage.classList.add("heartImage");

  element.appendChild(lower);

  outputContainer.appendChild(element);
}