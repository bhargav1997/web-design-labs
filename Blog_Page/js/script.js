const submitComment = () => {
   // Get form elements
   var commentForm = document.getElementById('comment-form');
   var userNameInput = document.getElementById('userName');
   var userEmailInput = document.getElementById('userEmail');
   var userCommentInput = document.getElementById('userComment');
   var commentsContainer = document.getElementById('comments');

   console.log(commentsContainer.textContent);

   // Check if the "No comments" message is present and remove it
   if (commentsContainer.childElementCount === 0 && commentsContainer.textContent === 'Sorry, No Comments to display.') {
      commentsContainer.innerHTML = '';
   }

   // Create a new comment element
   var newComment = document.createElement('p');
   newComment.textContent = userNameInput.value + ': ' + userCommentInput.value;

   // Append the new comment to the comments container
   commentsContainer.appendChild(newComment);


   const commentSeparator = document.createElement('span');
   commentSeparator.classList.add('comment-separator');

   commentsContainer.appendChild(commentSeparator);


   // Reset the form
   commentForm.reset();

   // Scroll to the bottom to show the latest comment
   commentsContainer.scrollTop = commentsContainer.scrollHeight;
};
