import './style.css';

const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: '21,492',
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: '12,502',
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: '15,137',
  },
];

// /* SOLUTION */
const mainEl = document.querySelector('main');
let html = '';
for (let i = 0; i < posts.length; i++) {
  html += `

        <article class="post">

            <div class="header container">
                <img class="avatar" src="${posts[i].avatar}">


                <div>
                    <div><span class="name">${posts[i].name}</span></div>
                    <span class="location">${posts[i].location}</span>
                </div>
            </div>


            <div>
                <img class="img post-image" src="${posts[i].post}">
            </div>


            <div class="control-bar container">
                <img class="social-icon" src="images/icon-heart.png">
                <img class="social-icon" src="images/icon-comment.png">
                <img class="social-icon" src="images/icon-dm.png">
            </div>


            <div id="likes" class="container">
                <span class="likes">${posts[i].likes} likes</span>
            </div>


            <div class="comments container">
                <p class="comment">
                    <span comment-name class="username">
                    ${posts[i].username}</span>
                     ${posts[i].comment}
                </p>
            </div>
        </article>
    `;
}

mainEl.innerHTML = html;

// Event Listener -- Double Click
const postImages = document.querySelectorAll('.post-image');
postImages.forEach((items) => items.addEventListener('dblclick', findPost));

// Function - findPost() -- Updates likes count
function findPost(e) {
  // Traverse DOM for post that was clicked
  const name =
    e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1]
      .childNodes[0].innerText;

  // console.log('name', name);
  // Find the name of the image that was clicked
  const post = posts.find((item) => item.name == name);

  // Manipulate String to Number
  typeof post.likes === 'string'
    ? ((post.likes = parseInt(post.likes.replaceAll(',', ''), 10)),
      post.likes++)
    : post.likes++;

  // TODO
  // Update likes in the DOM

  // Swap likes to string with comma
}
